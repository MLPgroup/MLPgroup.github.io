---
layout: resource
title: "Research 101: Writing a paper"

description: A memoir from Emma Hamel about writing a research paper. This article is intended for everyone that has some research they need to publish but don't know how/where to start. 

icon: star-o
people:
  - emma
  - kani
---

### Introduction

For better or worse, in today's modern society your worth isn't determined by the work you do, it's determined by the work that is shared with society as a whole. For that reason, the writing and presentation of your research often matters more than the research itself! For that reason, the most important skill you learn in school is how to present your work. In academia most of your work will be presented as acadmeic papers. 

Academic writing is tricky.  Unfortunately, technical writing is not emphasized in school, so it can be hard for new researchers to write good papers.  This document gives insight into how to effectively write a technical data science/machine learning paper for a conference or a journal.  

### Starting the Paper

The start of a good paper begins with the start of the experiments.  It can be tempting to jump right into a new project, but having a bulletproof action plan for the project will make writing a paper down the line much easier.  Action plans should outline the following:

* **Problem/Thesis**: What will this paper accomplish?  Are you solving a problem, putting out a novel dataset/model, or summarizing an area in AI that requires an updated review paper?
* **Datasets and Models**:  This will become your methods section.  Be sure to write down how the datasets are generated/where they come from and model implementation details. 
* **Experiments**: What sort of experiments will you be running to prove your problem/thesis?  
  * This is also a great stage of the planning process to consider what sorts of graphs and tables you might want to include. 
* **References**: What papers are you building your research off of?  Be sure to note papers of models and datasets you use too. 

I can not recommend keeping a document with notes containing all these details enough.  What you write in your notes during the project will become the foundation of your first draft. 

Of course, the action plan is only a jumping-off point.  As you progress through the experiments, you may find new and important insights that you want to include in your paper, or maybe some analysis didn’t work.  As this happens, be sure to take note of everything that worked and didn’t work, and why. 

### Structure of Paper

Every good paper has a ‘narrative’, or a central idea it tries to convey.  Narrative writing is important because it makes a paper more engaging and easier to follow.  A narrative can be broken down into a problem definition, proposed solutions, and the results of the proposed solutions- like the ‘introduction’, ‘rising action’, and ‘resolution’ of a novel.  Each section of the paper should support this narrative.

The following sections describe the main sections you might find in an academic paper with some tips and tricks for writing each section.  It should be noted that not every paper has to be constrained to only the sections listed here, this is just the most common way papers are structured. 

#### Abstract

Like a blurb for a novel, the abstract should describe the paper well and in a way that grabs the reader’s attention. A good abstract succinctly summarizes the problem and your study’s main results and conclusions. Typically, abstracts should be 150-200 words long. Another minor consideration for an abstract is search engine optimization. Include keywords and phrases that a potential reader might search in Google Scholar.  

#### Introduction

The three main functions of an introduction section are as follows: i.) familiarize the reader with the problem ii.) cover previous work done in the field iii.) give an overview of your paper.  First, state the problem and convey the real-world implications of this problem (E.I. why the reader might care about this topic).  Next, summarize the major developments related to the problem or work you are basing your paper on.  Then, describe your methodologies.  Be brief, as your methodologies will be explained thoroughly in the methods and results section of the paper.  End the introduction with your thesis statement- what are the arguments/conclusions you are trying to assert in your paper?

Finally, some authors include an overview of the structure of the paper (I.E., Section 2 introduces the models studied in this work, etc.).  This is not a requirement, so it is up to your discretion. 

#### Methods 

If the introduction is the ‘why’ of the narrative, the methods section is the ‘how’ of the narrative.  It is the section to detail model implementation and dataset information.  Be as explicit as possible. Use formulas and pictures to explain model architectures.  A reader should be able to implement your methods from your description.  

The methods section should also include a description of all the data used in your paper.  If you used a pre-made dataset, including how one can access it.  If you compiled the dataset yourself, explain how you did it (in a way that the reader can reproduce it!).  Other important details to consider adding are how the data was cleaned and statistics about the dataset.  Important statistics to highlight can include distributions of the data attributes or output classes.  Of course, this is not a requirement and should be added if relevant. 

Details of experiments can be put here or in the results section.  In Computer Science academic writing, it is a convention to have the description of the experiments in the results section, so that discourse can be found in the next section. 

#### Results

This is the best part of the paper!  Here you give an overview of the experiments you ran and interpret the results.  As before, the reader should be able to replicate your experiments from your writing.  Be as detailed as possible when explaining how results were obtained.  After each experiment description, include the results (usually in the form of a table or graph) and a breakdown of the results.  This breakdown should start with stating the trends in the table/graph- I.E. which model does better on a task, how is model performance impacted by an attribute of the data, etc.  Finally, conclude the analysis of the experiment with conclusions that can be drawn from the results- I.E. how do these results relate to the thesis, what about the models or the data could explain this result, etc. 

This section is perhaps the most integral section for narrative writing in academic articles.  Each experiment should contribute pertinent insight to support the thesis of the paper.  This, however, does not mean cherry-picking data to make your argument look good.  

#### Conclusion 

The first part of a conclusion is a lot like an introduction. It should start with a re-summarization of the problem and its implications, your results, and the thesis.  Because the reader ostensibly reads your paper, this part should be brief. Next, a good conclusion explores the high-level implications of your work and discusses ideas for future analysis in the field.  

### Editing

Once you have finished your paper, it's time to edit!  This is the time to correct any awkward grammar and make sure the narrative of your paper flows. Here are a few tips for editing your paper.

* Use spelling and grammar-checking software. With [Grammarly](https://app.grammarly.com/), you can paste in an entire section of your paper and fix quick grammar and spelling errors.  While this is not a fix-all,  it is a great start and should catch a lot of your typos. 
* When in doubt, break up long sentences into short sentences.
* **Read your writing aloud.** Yes if someone hears, you might be a little embarrassed but it is shocking how well this works. You brain is a amazing machine which tries to fill in and correct any missing/weird pieces of information. Reading aloud to yourself stops it's smoothing function and allows you to hear what you wrote (not what you think you wrote).

In general expect 4-5 revisions minimum before a manuscript can be sent out into the world. Yes it's a lot of work, which is why publishing a paper is a big deal!


### References

Some useful links the group members have foudn useful over the years: 

* [Tandy Warnow’s great guide on academic writing](https://tandy.cs.illinois.edu/writing.html)

