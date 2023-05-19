---
layout: resource
title: "Campus Cluster - Using Jupyter notebooks remotely"

description: Jupyter notebooks are nice because you can interact with your script iteratively and interactively. But sometimes you need the computing power of a remote server. This short post is on how to setup a jupyter notebook on a remote server and interact with it through your browser. 

icon: star-o
people:
  - kani
---

I'm going to assume you already have a conda environment setup. If you don't refer to a the previous CampusCluster [post](/resources/2023-04-19-UsingtheCC-customsoftware). 

To install jupyter notebook/lab do: 

```> conda install -c conda-forge jupyterlab ```

Next we need to setup a remote notebook. In short, first you got to get a jupyter server running on the remote machine. You also got to specify the port it is attached beforehand so you can connect to it from your local machine. Use this command: 

```> jupyter notebook --no-browser --port=8889```

Now you should see some startup text, but you should also see a link like: 

{% highlight shell %}
	    To access the notebook, open this file in a browser:
	        file:///home/kani/.local/share/jupyter/runtime/nbserver-14164-open.html
	    Or copy and paste one of these URLs:
	        http://localhost:8889/?token=b2c5e1eae3afa5d217e19af83cc742e1cdce7fb7784451fb
	     or http://127.0.0.1:8889/?token=b2c5e1eae3afa5d217e19af83cc742e1cdce7fb7784451fb
{% endhighlight %}

The token string in the url (last line) is the important thing. 

Next on the local machine, we got to forward one of our ports to the port on the server. we can do this using the ssh -L: 

```> ssh -N -f -L localhost:8888:localhost:8889 netid@cc-login.campuscluster.illinois.edu``` 

There won't be an output to this command if it works. You'll be unsure if it did anything but if you try to run it again you'll see a message that port 8888 is in use. 

You can also check to see the ports that are in use by using the following command: 

```> lsof -i -P -n | grep LISTEN```

The command will setup a ssh instance that forwards everything going to port 8888 on your local machine to port 8889 on the campuscluster which is attached to your still running jupyter server. 

Next we got to interact with our jupyter server. To do that, open a webbrowser and type:

```localhost:8888```

If you did everything right, this should open up a jupyter page asking for a password and/or token. We didn't setup a password but we do have the token from when we setup the server. Enter that token and you should be greeted by the familiar jupyter file browser where you can do whatever you want. 

To kill your session you can use CTRL-C to kill the server, and on your local machine you got to kill the port forwarding. To do this you can use: 

```> lsof -n -i4TCP:8888```

To find the PID of the ssh process using the port and then do:

```> kill PID ```

To kill it. 


### References

* Instructions I adapted for this post - [https://amber-md.github.io/pytraj/latest/tutorials/remote_jupyter_notebook](https://amber-md.github.io/pytraj/latest/tutorials/remote_jupyter_notebook)

<!-- {% highlight javascript %}
document.write("JavaScript is a simple language for javatpoint learners");
{% endhighlight %} -->


