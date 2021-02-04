# CSC301 Assignment1 Checkout cart
In this assignment, we implemented a Game Shop website with a simple checkout cart. 

We'll demonstrated our choice for each stack by detail comparison with other technologies in each stack in the following sections. 

Noted:One's pros is another one's con. Thus we only have one  pros and one con section when comparison.

Here's the breakdown of the stacks that we've used in this assignment. 
### Architecture
- Platform: Web
- Frontend: React JS
- Backend:Node.js
- Database: DynamoDB
- CI/CD: Github Actions

## Platform : Web
In this assignment, we choose to develop a web application for the simple checkout cart,because the following features that web possess;

- Firstly,web application is cross-platform. Developing sole mobile application will makes us restricted to the OS environment.
- Besides, since we are using react.js for front-end development, we can reuse most of JS code between Android and iOS with React-like components. We can first use React to build the web framework and proceed to mobile development further.

- In addition,web application is more scalable and more accessible, which do not require installation and further save storage.

## Frontend
For front end, we choose to use React.
Here's the comparisons with other frontend techonology.

#### Coparison with other frontend techonology
We'll mainly compare these three Frontend options : React,Vue and Angular.
- **Popularity: Widespread Usage**
  - Accoding to Stackoverflow 2020,React.js is the second most popular web framework among all, as more then 35% of respondents use React.js.
  - Compared to React.js, other famous frameworks such as Angular.js, Vue.js,Spring has less users.
   ![Ranking of Top Web Framework](./images/react_rank2.PNG)

    | Web Framework | Popularity (collected from Stackoverflow 2020 suryvey) |
    | ------------- | ------------------------------------------------------ |
    | React.js      | 35.9%                                                  |
    | Angular       | 25.1%                                                  |
    | Vue.js        | 17.3%                                                  |
    | Spring.js     | 16.4%                                                  |

#### Vue vs React

- **Domain Covered**
  -  React and Vue are  terrific framework that can be applied on both frondend and backend.

- **Ease of Development**
  - Although with clearer documentation and easy learning curve, Vue is easy for beginner to learn. It's also easier to get accustomed to because it picked out the advantages of React and Angular. 
  - However, both my teammates and I are more familiar with React. Working with technology that we are familiar would be helpful for debugging and implementation.
- **Maturity: React has broader package ecosystem**
  - Vue has fewer resources, available packages and third-party libraries. 
  - Both Vue and React gain support from all major IDEs, while React is more extensive.
  - React features a huge ecosystem and an extremely active community, which is convenient. That is to say, it contains a huge amount of libraries, packages,tools. That is to say, we may easy find a solution or an extra package to fix the problem we encounter.
- **Scalability: Reusing Component in React**
  - React is more scalable since it uses JSX which allows reusing component in the code. Thus the code structure is neat and clean. Both HTML and CSS are expressed via JavaScript with XML syntax.
  - Vue uses HTML templating with single file component.When we are develope large project, reusing HTML templates is a huge pain and is nasty.
- **Perfomance**
    - **Rendering Child Component In React**
      - Vue prevents unecessary renders of child components by tracking dependecies.
      - While in React, if a component state is modified, then all the child components of this parent comonent will be re-rendered.This will cause some lag in running speed.
    - **Vue Has built-in Server Side Rendering**
      - React needs third-party libraries assistance to implement server side rendering.However, Vue has in-built Server side rendering capabilities which is much convenient.
#### Angular vs React

- **Domain Covered**
  -  React and Angular are both suitable for web and mobile development. And they both require additional framework for mobile development, which are React Native and NativeScript respectively. And they both support single-page and multiple-page web applications. They are well-matched in domain covered.
- **Ease of Development**
  -  React is more easy to learn and angular are new to us.
  - With basic knowledge, the framework of React is much simple to understand. React is minimalistic, which do not have complicated features and dependency injection.
  - Angular possess a huge library and it uses TypeScript and it's constantly updated. The syntax and component management is also intricate, thus Angular requires extra learning effort.
- **Language**
  - Angular support both JavaScript and TypeScirpt. TypeScirpt is more compact than Javascript which is easier for code refactoring and debugging.
  - React used JSX script and it helpes JavaScript resemble the code written in HTML. It makes the code more readable and allowing reuse of component. 
- **Performance**
  -  Angular has worse performance. when developing complex and dynamic web applications. This is mainly caused by bidirectional data-binding with assigned watchers.
  -  Angualr also uses regular DOM. it generally re-rendering the whole page which is a heavy DOM manipulation.
  -  React performs better with the feature of light weight virtual DOM and thus it only updates those changed object,which further saves time and resources.

- **Structure of the Application**
  - Angular has fixed and complex struture and is applying an MVC structure:Model, Controller, and View, which is more suitable for developer with experience.
  - React does not restrict the developer on structures and it only offers only View Layer. Since we are building a simple single-page website, React is enough for us.
- **Dependency Injection: not supported in React**
    - Angular supports dependency injection and further allows having different lifecycles for different stores
    - React does not support dependency injection. It only has a global state for all components. 

#### Summary
As the most popular frontend techonology, React requires less learning effort and has better performance with the Virtual DOM. Compared the other two tools with similar features, React is more managable and has better performance.
Thus,we choose React as our Frontend techonology.

## Backend:

## Testing Infrastructure

## CI/CD: Github Actions
We use github Actions as our CI/CD tools in this assignment.
#### Comparison with other CI/CD tools
We'll mainly compare these three CI/CD tools options : CircleCI, Github Actions, Jenkins.
- **Popularity**
  - Both CircleCI and Jenkins are ranked as one of the best CI/CD tools in 2020. Among which, Jenkins is ranked as the top 1 best CI/CD tools in 2020.As one of the latest CI/CD tools,Github Actions are not in the list.
- **Ease of Development**
  - Github Actions is the most convenient one among all three options. Since we are using Github as our source control platform, it house our code repository and pipeline under the same platfom. 
  - For the other 2 CI/CD tools, they both need installation and the setting up process is much more inconvenient.

![Speed Comparison of CICD](./images/cicd.PNG)
#### CircleCI vs  Github Actions
  - **Performance:Faster building speed in CircleCI**
    - According to the speed test comparsion of different CI/CD tools, CircleCI has the fastest building speed among all. While Github Actions is only in the 3rd place.
   ![Speed Comparison of CICD](./images/github.PNG)
  - **Community Powered Shared Actions**
    - Github Actions support shared actions which is really convenient for beginners. The published actions can be reused by others. They also automatically detect the language you are using in the repo and provide workflow suggestion and corresponding template.
  ![CICD](./images/workflow.PNG) 
  - **Feature: Allowing Multiple config**
    - GitHub Actions are able to configure multiple files compared to CircleCI. Although CIrcleCI also use YAML , it expect only one config file in each repository.
  - **Cons:Limit build history and less feature in Github Action**
    - GitHub Actions only showed the build for a week before deleting the build log.
    - While CircleCI track anlytical data on all of the jobs. CircleCI also introudced more builtin-features such as Manual approval/trigger.
#### Jenkins vs Github Actions
  - **Scripts: Clearer Structure and intuitive scripts**
    - Compared to Jenkins, Github Actions uses Yaml to create workflows and configuaration files, which has clearer structure .especially when building with mulitple operating system. Jenkins uses declarative pipelien and scripted pipelines.
   ![Comparison between Jenkins and github actons](/images/github_actions.PNG)
- **Hosting: Cloud hosting in Github Actions**
  - Github Actions hosts its own runner in the cloud for us to use to run jobs, while Jenkins deployment are mostly self-hosted. As user, we need to maintain the server in our own data centers, which is much more inconvenient than github actions
- **Performance: Jenkins requires more time to run**
  - Jenkins use sequential pipeline while Github Actions follow the coordinator and build nodes pattern.
  - With Github Actions,multiple actions components work together to run jobs, which is much more efficient.
  - With Jenkins,each step are executed in the deployment pipeline synchronously, which would caused more time for execution.
- **Domain Covered**
  - Jenkins can handle many types of jobs including bash scripts,maven,powershell. 
  - Github Actions do not cater for ad hoc jobs. It listening to git events. However, since we are only dealing with git events in this assignment, Github Actions is sufficient for us.
#### Summary
All in all, despite some defects in limited domain and popularity,since we are designing a small project and use github as our source platform, Github Actions still wins with its ease of developement and good performance.

## DataBase : DynamoDb

## Summary

## Production website
http://csc301a1.s3-website.ca-central-1.amazonaws.com/


