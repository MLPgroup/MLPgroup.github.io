---
layout: resource
title: "Campus Cluster - Installing/using custom software"

description: While the campus cluster has many software modules available by default, there will be times when you'll need to use software that is not available through the default modules. This post will help guide you on using custom software on the campus cluster. 

icon: star-o
people:
  - kani
---

When needing to use a custom piece of software, many people (students especially) are used to installing the software locally and loading it the "standard" way. However, when you're working on a remote machine like the campus cluster one can simply not do that. Can you imagine the chaos if every person was allowed to install whatever libraries they wanted to the shared python module?! it'd be chaos. 

That's why it is important to learn how to install and use custom software on the Campus Cluster. We'll investigate two methods. First is to use a package manager (easy) and the second is to install a binary and write a module that links to it (Not as easy). 

### Using Anaconda 

Let's say every time you needed a new piece of software, you installed it locally and hoped for the best, over the course of several years these softwares can start interfering with one another and bugs can be produced. They might share names for global variables or they might require conflicting versions of Python or software A may require a certain driver that is know to conflict with software B, etc. Resolving all these dependencies yourself is incredibly tedious and so another solution is needed. 

Enter Anaconda. You can think of Anaconda as a package manager focused on software relevant to the math and data-science community. It's main function is to install and maintain this software and let you easily switch between combinations of softwares (called environments). It performs two functions: 
* allows you to create an environment with only the relevant software
* checks for software dependencies and resolves those dependencies as best as possible

So to use anaconda, you simply need to do the following: 

* Create an environment where your software will be installed. 
* Install the software you want in this new environment. 
* Activate your environment (this tells your terminal that you want to use the python/pip/jupyter that is installed in this environment)
* Deactivate your environment once you are done.

So back to the point of this post. The CampusCluster has several Anaconda versions available, you can view which ones by typing ```module avail``` into your terminal. You probably will simply want to use the newest version of anaconda so type ```module load anaconda/3``` into your terminal or add it to your ```.bashrc``` file. 

#### Do not make environments in your root directory!

On the CampusCluster, you are given only 5Gb of personal disk usage. Considering that Conda environemnts contain the binaries of whatever softwares (and their dependencies) that you install, these enivroments can be several Gbs large and will quickly take up your entire allotment in the CC. 

By default, Anaconda uses the ```~/.conda``` folder to store the environments. Now I know that in theory, you can change this default behavior and have it store you environments anywhere. But after struggling to do that, I found a better way: use symbolic links!

Linuc offers this powerful little trick where you can create a symbolic link (using ```ln -s```) to any other directory in the file system. So for instance let's say I had a directory ```/a/b/c/d```. If I wanted to go to that directory I can simply type ```cd /a/b/c/d```. But that's a little tedious if I am constantly going to that directory and back. Instead I can create a symbolic link in my home directory ```ln -s \a\b\c\d``` and then I can simply type ```cd ~/d``` to get to that directory. What more important is that any program that is using ```~/d``` will actually be routed to ```/a/b/c/d```. 

So with Anaconda, it is too difficult to change it's behavior. But instead, you can:

* Make a space on the group shared drive: ```mkdir /projects/kani-lab/[yournetid]/<usr>/envs```
* Make a "remote" ```.conda``` folder: ```mkdir -p /projects/kani-lab/[yournetid]/.conda```
* Sync your existing ```.conda``` folder to it: ```rsync -avP ~/.conda/* /projects/kani-lab/[yournetid]/.conda/```
* Remove the existing ```.conda``` folder in your root:  ```rm -rf ~/.conda```
* Setup symbolic link: ```ln -s /projects/kani-lab/[yournetid]/.conda ~/.conda```

#### Creating/activate your conda environment

Now we got to create a conda environment (we'll name it "myenv" here but you should use a name that describes the environment's purpose): 

``` conda create -n myenv python=3.XXX ```

Next we can activate it: ``` conda activate myenv ```

And that's it. If you type ```which python``` you should get an output along the lines of: ```~/.conda/envs/batcomp/bin/python```.


To install software into your environment you simply type ```conda install``` 

Some useful commands: 
* List all the environments: ```conda info --envs```
* Activate an environment: ```conda activate myenv```
* Deactivate current environment ```conda deactivate```
* List all packages installed ``` conda list```
* Delete an environment ```conda env remove```
* Export environment (to share with others) ```conda env export > env.yml```
* Import environment from YAML file ```conda env create -n myenv --file env.yml```


### Using software without an environment manager

Now if you want to use a software but it isn't supported by anaconda, that's a bit harder. A program is simply a binary and you can download and run it manually. but what if you want to download a software to share among a group of individuals on the CampusCluster? 

This is the issue I recently faced with GitLFS which is needed for many of our group members' work with the arXMLiv corpus. Here's what I did: 

- First I went to the GitLFS repo and downloaded a compiled binary 
- Put the compiled binary in the group folder nd verify that it did work on the CampusCluster
- Make a module file that adds the path to this binary to your terminal ```$PATH``` variable


```
#%Module1.0####################################################################
##
##

proc ModulesHelp { } {
   global _module_name GitLFS

   puts stderr "The $_module_name modulefile defines the default system paths"
   puts stderr "and environment variables needed to use the $_module_name"
   puts stderr "libraries and tools."
   puts stderr ""
}

module-whatis   "Git large file transfer (LFS) service"

set     approot  /projects/kani-lab/apps/gitlfs/git-lfs-linux-amd64-v2.13.1

prepend-path             PATH  $approot
```

Now anyone in the group can gain access to GitLFS by saying

{% highlight shell %}
(base) [kani@cc-login2 ~]$ module load /projects/kani-lab/modulefiles/GitLFS 
(base) [kani@cc-login2 ~]$ git lfs --version
git-lfs/2.13.1 (GitHub; linux amd64; go 1.14.12; git e896fc7a)
{% endhighlight %}


### References

* Anaconda Command Reference - [https://docs.anaconda.com/free/anacondaorg/commandreference/](https://docs.anaconda.com/free/anacondaorg/commandreference/)
* Anaconda cheat sheet - [https://docs.conda.io/projects/conda/en/latest/_downloads/843d9e0198f2a193a3484886fa28163c/conda-cheatsheet.pdf](https://docs.conda.io/projects/conda/en/latest/_downloads/843d9e0198f2a193a3484886fa28163c/conda-cheatsheet.pdf)

<!-- {% highlight javascript %}
document.write("JavaScript is a simple language for javatpoint learners");
{% endhighlight %} -->
