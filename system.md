---
layout: page
menu: System
title: V² Plan System
subtitle: V²Plan System is growing into a generic Agile Development & Toyota Production System easily adaptable to any GitHub Organization.
issueNo: 54
breadcrumbs: System
visualURL: https://cloud.githubusercontent.com/assets/7278716/14466638/3a39ff76-010a-11e6-803d-2822584a79b3.jpg
contents: 
  - name: Introduction
    url: intro
  - name: Eating our own Dog Foot
    url: dog-foot
  - name: Methods
    url: methods
  - name: Cross Repo Management
    url: cross-repo
  - name: How it all fits together
    url: fits
---

# Generic Introduction <a name="intro"></a>
All description on using V²Plan System is in the [Introduction to V²Plan](/v2-Plan).


# Eating our own Dog Foot <a name="dog-foot"></a>
We needed a System to efficiently manage development and production using Agile and Toyota Production System. All our stuff is on GitHub and we heavily use GitHub Issues and GitHub Flow. Thus we wanted a system that tightly integrates with them, yet goes beyond the capabilities of the GitHub tools. We could not find it. This is why we build V²Plan System. We hope that it makes live easier for contributors to V² and also that other Organizations on GitHub might find it useful. As always don't be shy to let us know what you think, report bugs or ideas using GitHub Issues.


# Methods <a name="methods"></a>

1. **GitHub Tools:** The GitHub Tools may not look like much and they give you enough rope to hang yourself. That said, we found that when properly used they work exceedingly well.
2. **Agile Development:** Agile is well documented development method that outputs frequent shippable product increments. 
3. **Toyota Production System:** Long before Kanban and Agile was used to speed up Software development it was used to speed up hardware (as in cars) development and production. Lots of literature is available on the *Toyota Production System*. We adopted it for standards, electronics and case development and production.
4. **V² True North:** A vision on how the world will look like in 2021 after the successful introduction of V² showing how V² improves your life. It shows the user where we are going and directs the contributor to go there.
5. **Strict Hierarchical Structure:** Reaching *V² True North* is a *Big Undertaking*. Using a *Strict Hierarchical Structure* is essential for a *Divide and Conquer* approach that cuts the *Big Undertaking* in ever smaller pieces, until they are simple *Tasks* which are *assigned* and *worked down*.  We use 7 Levels: True North → Road Map → Campaigns → Milestones → Sprints → Issues → Tasks.
6. **Consistent use for all types of Development:** We develop: **1)** Software, **2)** Hardware, **3)** Standards **4)** Production Methods **5)** Documentation **6)** Art. All methods have been carefully designed that they work on all 6 types.
7. **Add Missing Tools:** While we use all available GitHub Tools to manage our projects we added missing tools for:  **1)** Kanban (Scrum) Boards, **2)** Gantt Charts, **3)** Road Maps, **4)** Dashboard
8. **Making the Plan easy to understand:** The best way to reach our target in an effective way on time is to deliver easy to find answers to the following questions: **1)** Where are we going? **2)** What work needs to be done? **3)** how to track if we are on time? 
9. **Easy Documentation:** Easy accessible and nice to read documentation increases the odds that contributors work towards the same goal delivering work that is compatible to each other and that their *Pull Request* are easy to integrate.
10. **Visual and Visible Progress:** Seeing that you or your colleagues made progress is motivating and as such we added lots of visual progress indicators to the *V² Plan Workflow*.
11. **Easy to Contribute:** The success of *V² Initiative* depends on *Contribution*. As such it is essential for our success to make contribution easy. The Architecture in V²Plan makes it easy to make **1)** Feature Requests / Bug Reports, **2)** Contribute Work and **3)** Get involved  with Management.
12. **Clean Access Privileges:** Architecture and workflow is designed for clean and strict access privilege management, yet allowing the contributor to work unhindered.



# Cross Repo Management <a name="cross-repo"></a>

## Not everyone needs Cross Repo Management

In fact most GitHub Organization will work well without it. This may be the reason why 
GitHub has efficient tools to manage development within a repository. It has however no tools whatsoever to coordinate development across repositories. If you are interesting to adapt V²Plan for your Organization, please read → Adapting V²Plan. It also includes a simplified version for this case.

## V² needs Cross Repo Management
V² is a *Standard Organization* and as such we have development going on in parallel in many repositories where development within a repository has dependencies to development within other repositories. Consequently we need management tools to this end. This chapter is an introduction to these tools.

## Managing 4 V²Plan Levels with GitHub Issues
<font color="grey">??? Take the lower 4 levels of Pyramid Illustrations. Move Table content to tooltips with links to specific sections in Reference Manual???</font>

GitHub's key management tool is GitHub Issues. When properly used it works very well. We optimized the structure of V² Plan's 7 Levels so that we can manage 4 Levels with GitHub Issues:

| V² Plan Level | GitHub Issues Tool |
|--------------:|:-------------------|
| 7-V²Tasks | Tasks in GitHub Issues |
| 6-V²Issues | Individual Issue of GitHub Issues |
| 5-V²Sprint | Issues grouped via Label in GitHub Issues. Managed with [Waffle](https://waffle.io/)|
| 4&#8209;V²Milestones | Issues (of same Repository) grouped via Milestone GitHub Issues [^1]. |

[^1]: V² Plan Tools manages Cross Repository dependencies. As such we do not need Milestones to do that

For more information → V²Plan Reference Manual

## Develop V²Plan Tools to manage remaining 3 Levels
<font color="grey">??? Take the top 3 levels of Pyramid Illustrations. Move Table content to tooltips with links to specific sections in Reference Manual???</font>

The top 3 levels of our V²PLan Architecture have no equivalent GitHub tool. As such we are in the process to develop them:

| V² Plan Level | Tool |
|--------------:|:-------------------|
| 3&#8209;V²Campaigns | Interactive Gantt Chart Diagram. Each Milestone is a bar in the diagram. Cross-linking makes navigation in both direction easy and fast. |
| 2&#8209;V²Road Map | Interactive Road Map Diagram. Each Campaign is a box in the diagram. Cross-linking makes navigation in both direction easy and fast. |
| 1&#8209;V²True North | Text document describing a Vision on how the world will look like in 2021 after the successful introduction of V² showing how V² improves your life. It shows the user where we are going and directs the developer how to go there. |

For more information → V²Plan Reference Manual

# How it all fits together <a name="fits"></a>
![](http://www.presentationmagazine.com/powerpoint-templates/0/0/00358/powerpoint-jigsaw-puzzle-template_1.jpg)

*???Draw this Image same style as the puzzle in the V² Home Page. Hover over Puzzle piece will show the tool tip with the content from the table below with links to their Articles???*

Directing and coordinating so many projects over such an extended time is no small matter. We are in the process of writing Articles on each topic to guide *Contributors* to find work faster and to deliver *Pull Requests* that are easy to merge:

| Article | Content
|---------:|:----------------|
|V²Plan Introduction | Purpose, Motivation, Methods, How it all fits together |
|[V²Plan Reference][1] | Architecture, Data Structure, Tools, Visualization and Navigation of V²Plan. Mapping of V²Plan to V²Agile|
|[V²Agile Workflow][2] | All Steps from Vision to Ideas through Sprint Development to Product involving everyone |
|[V²Sprint Workflow][3] | Sprint Cycle Workflow, Roles & Communication, Continuous Iteration, Continuous Integration |
|V²Roles & Comunication | Which *Role* is doing what *Jobs* communicating to whom using which *Tools*  | 
|V²Iterations | Continuously improve, test and deploy product with *Shippable Product Increments*. For Software, Hardware, Standards, Production Methods and Art |
|[V²Agile Philosophy][6] | Agile Development and Toyota Production Philosophy consistently applied to Software, Hardware, Standards, Production and Art. |
|V²Plan Cheat Sheet | All interactive Info Graphics in one page |
|Adapting V²Plan| Tutorials and suggestions on how to adapt V²Plan for other organizations

[1]: http://v-squared.github.io/v2-Plan/system/plan-reference/
[2]: http://v-squared.github.io/v2-Plan/system/agile-workflow/
[3]: http://v-squared.github.io/v2-Plan/system/sprint-workflow/
[6]: http://v-squared.github.io/v2-Plan/system/agile-philosophy/


## Additional Articles

| Article | Content
|---------:|:----------------|
| [Problems of the Past][10] | List of Problems we experienced in the Past and how V² Plan is solving them. |

[10]: http://v-squared.github.io/v2-Plan/system/problems/


--------------------------

(To be deleted later)

# Status

| Type  | Info |
|------:|:-----|
| Source | Classeur |
| Readiness | Develop |
| On GitHub | [system.md](https://github.com/V-Squared/v2-Plan/blob/gh-pages/system.md) |


# Table of Contents

- [Generic Introduction](#intro)
- [Eating our own Dog Foot](#dog-foot)
- [Methods](#methods)
- [Cross Repo Management](#cross-repo)
- [How it all fits together](#fits)


