# FAQ for Professional Volunteers

- **Q1:** [What does OLE do and what is Planet Learning?](#Q1:_What_does_OLE_do_and_what_is_Planet_Learning?)
- **Q2:** [What skill sets do we need?](#Q2:_What_skill_sets_do_we_need?)
- **Q3:** [What will I be working on as a volunteer coder?](#Q3:_What_will_I_be_working_on_as_a_volunteer_coder?)
- **Q4:** [What is the minimum duration of a volunteer assignment?](#Q4:_What_is_the_minimum_duration_of_a_volunteer_assignment?)
- **Q5:** [How many hours/week are required?](#Q5:_How_many_hours/week_are_required?)
- **Q6:** [How do I get started?](#Q6:_How_do_I_get_started?)

## General Questions

### Q1: What does OLE do and what is Planet Learning?

OLE provides a range of educational support services in pursuit of our mission to improve education delivery for all. As part of this effort we have developed suite of learning tools that we call Planet Learning (formerly referred to as BeLL and BeLL Apps). Planet Learning includes both cloud and offline services. At its core Planet Learning is a virtual library coupled with course building and student management tools. 

Planet Learning is made up of two parts - a cloud service (nation) and a local service (community). We use the nation/community infrastructure because we often deploy in places where internet access is not available, unreliable, and/or costly. As a cloud service, the nation is always on. Communities run offline and provide services via an *intranet* and as such are offline most of the time. Communities do need to sync with the nation periodically to receive content and software updates and to report user data to the nation. 

### Q2: What skill sets do we need?

OLE works with a range of software tools and languages including Git, GitHub, Gitter, Markdown, Vagrant, VirtualBox, Command Line/Terminal, Command Line/Terminal Scripts, Vim, CouchDB, HTML5, Javascript, Angular, Bootstrap, Node.js, Android App Development, Docker, Linux, Linux/Raspbian, and non-SQL databases such as Apache CouchDB.

### Q3: What will I be working on as a volunteer coder?

Volunteer coders support a range of development needs. OLE is undertaking a complete re-write of our Planet Learning software. We have needs at all levels. 

### Q4: What is the minimum duration of a volunteer assignment?

We ask for a minimum commitment of 3 months. Generally speaking, it takes 2 - 4 weeks to fully on-board which leaves 2 months of productive time. 

### Q5: How many hours/week are required?

As you are volunteering your time we are grateful for any time that you can dedicated. We suggest a minimum of 20 hours per week.

### Q6: How do I get started?

OLE also maintains a virtual internship program. We ask that all volunteer coders walk through [the internship on-boarding exercise](firststeps.md), as this provides a good introduction to our workflow and the tools that we use. Once completed, volunteer coders should post a message in our [Gitter channel](http://gitter.im/open-learning-exchange/chat)so that we can setup a time to speak directly. 

#### Background on the on-boarding exercise

The aim of the ‘First Steps’ is to introduce prospective interns to the workflow and tools that they will use while working with OLE. Although each step goes into detail on the specific program(s) at hand, it is easy to lose sight of the bigger picture. To that end, below is a brief synopsis of the primary tools you will be using/learning about in the first steps, and how they work together to empower our collaborative development environment.

The first steps walk through Planet Learning. Planet Learning is a lightweight digital Library that can be accessed through local networks (community). The community is periodically synced through the internet with the cloud service (nation). OLE uses the Vagrant package manager to pre-configure a virtual machine on the user's computer. Using this virtual environment we access the Planet Learning interface locally and create a local community linked to a nation.

The other two tools we focus on as part of the on-boarding process are GitHub and Markdown. We use Git/GitHub to centralize the development process and to enable greater collaboration and teamwork. Git is a revision control system that allows many users to simultaneously edit and develop the same projects, and GitHub is a website/hosting service that utilizes the git system, and hosts the git repositories we work on. Markdown is the text standard native to GitHub and thus used in the Virtual Intern program. Markdown simplifies formatting and emphasizes readability, helping coders focus on content without getting bogged down in syntax.

To sum up, the primary software/tools we cover in the 'First Steps' are Planet Learning, Vagrant, VirtualBox, Git/GitHub and Markdown. Though not immediately apparent, the tools we use are all unified by a common purpose - collaboration. The use of Vagrant and VirtualBox ensures that every instance of Planet Learning is the same, making sure that all developers are developing on the same system. Markdown simplifies the development process, as each piece of code must comply to its syntax, increasing clarity for all users. Finally, GitHub serves as the last piece in the puzzle, as it takes advantage of the standardized development environment that Vagrant/VirtualBox provide, as well as the streamlined syntax of Markdown to allow for easy collaboration.

It is often challenging to see the 'Big Picture' when focused on individual tasks. With that said, we hope that this synopsis sheds light on the importance we place on the process, and demonstrates that each step is not an isolated assignment, but rather, part of a greater task.

## Helpful Links

#### *GitHub and Markdown*

- [GitHub and Markdown Short Tutorials](https://guides.github.com/)
- [GitHub Help](https://help.github.com/categories/search/)
- [GitHub's Git Tutorial](https://try.github.io/)
- [Git-it Workshop](http://jlord.us/git-it/)
- [Codecademy's Learn Git Course](https://www.codecademy.com/learn/learn-git)
- [Git Pro (Book)](https://git-scm.com/book/en/v2)
- [Git Cheat Sheet (PDF)](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Tips](https://github.com/git-tips/tips/blob/master/README.md)
- [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax)
- [Markdown Cheat Sheet (PDF)](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf)
- [Markdown Editor](https://jbt.github.io/markdown-editor/)
- [Vi Cheat Sheet (JPG)](https://www.shell-tips.com/sheets/vi_help_sheet.jpg)

#### *VirtualBox*

- [VirtualBox First Steps (Manual)](https://www.virtualbox.org/manual/ch01.html)

#### *Vagrant*

- [Vagrant Documentation](https://www.vagrantup.com/docs/getting-started/)
- [Vagrant Tutorial](https://scotch.io/tutorials/get-vagrant-up-and-running-in-no-time)

## Helpful Videos

- [GitHub & Git Foundations (Playlist)](https://www.youtube.com/watch?list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-&v=FyfwLX4HAxM)
- [Shorter Git/GitHub Tutorial (Playlist)](https://www.youtube.com/watch?v=vR-y_2zWrIE&list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF)
- [Mastering Markdown (Playlist)](https://www.youtube.com/watch?v=Je5w18nn-e8&list=PLu8EoSxDXHP7v7K5nZSMo9XWidbJ_Bns3)
- [How to Manually Fix Git Merge Conflicts](https://www.youtube.com/watch?v=g8BRcB9NLp4) - Please, note that this video will explain how to fix a merge conflict from the point of view of the repo owner who is trying to merge a pull request. However, it is helpful also when you have to fix a merge conflict on your own local and forked repos.
- [How to Use VirtualBox](https://www.youtube.com/watch?v=Dbblu_HVROk)
- [Vagrant Tutorial](https://www.youtube.com/watch?v=PmOMc4zfCSw)
