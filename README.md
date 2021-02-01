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
For front end, we choose to use React.js. React is more managable and allowing resuing component. It focus on Business logic not on preventing your app from exploding.

#### Comparison with other frontend techonology

- **Popularity: Widespread Usage**
  - Accoding to Stackoverflow 2020,React.js is the second most popular web framework among all, as more then 35% of respondents use React.js.
  - Compared to React.js, other famous frameworks such as Angular.js, Vue.js,Spring has less users.
   ![Ranking of Top Web Framework](./images/react_rank2.png)

    | Web Framework | Popularity (collected from Stackoverflow 2020 suryvey) |
    | ------------- | ------------------------------------------------------ |
    | React.js      | 35.9%                                                  |
    | Angular       | 25.1%                                                  |
    | Vue.js        | 17.3%                                                  |
    | Spring.js     | 16.4%                                                  |

##### Vue vs React

##### Pros

-  **Maturity: React has broader package ecosystem**
  - Vue has fewer resources, available packages and third-party libraries. 
  - Both Vue and React gain support from all major IDEs, while React is more extensive.
  - React features a huge ecosystem and an extremely active community, which is convenient. That is to say, it contains a huge amount of libraries, packages,tools. That is to say, we may easy find a solution or an extra package to fix the problem we encounter.
- **Scalability: Reusing Component in React**
  - React is more scalable since it uses JSX which allows reusing component in the code. Thus the code structure is neat and clean. Both HTML and CSS are expressed via JavaScript with XML syntax.
  - Vue uses HTML templating with single file component.When we are develope large project, reusing HTML templates is a huge pain and is nasty.
  
##### Cons
  - **React: Rerender all child component**
    - Vue prevents unecessary renders of child components by tracking dependecies.
    - While in React, if a component state is modified, then all the child components of this parent comonent will be re-rendered.
  - **React:No built-in Server Side Rendering**
    - React needs third-party libraries assistance to implement server side rendering
    - Vue has in-built Server side rendering capabilities which is much convenient.
##### Angular vs React

##### Pros
- **React: Ease of Learning and evelopment**
  React is more easy to learn and angular are new to us.
  - With basic knowledge, the framework of React is much simple to understand. React is minimalistic, which do not have complicated features and dependency injection.
  - Angular possess a huge library and is constantly updated, which requires extra learning effort.
- **React: Better Performance**
  -  Angular has worse performance. when developing complex and dynamic web applications. This is mainly caused by bidirectional data-binding with assigned watchers.
  -  React performs better with the feature of light weight virtual DOM and thus reduced load on browser. It does not creat additional workload since it has unidirectional data-binding process without watchers.
##### Cons
  - **Dependency Injection:not supported in React**
    - Angular supports dependency injection and further allows having different lifecycles for different stores
    - React does not support dependency injection. It only has a global state for all components. 
## Backend:

## Testing Infrastructure

## CI/CD: Github Actions
We use github Actions as our CI/CD tools in this assignment.
#### Comparison with other CI/CD tools
We'll mainly compare these three CI/CD tools options : CircleCI, Github Actions, Jenkins.
##### CircleCI vs  Github Actions
##### Pros & Cons
  - **Pros:Ease of Use**
    - Since we are using Github as our source control platform, Github Actions is convenient to sete up. After pushing any new feature to the remote repo, it will automate the tasks. It house our code repository and pipeline under the same platfom. 
  - **Pros:Allowing Multiple config**
    - Compared to CircleCI, GitHub Actions are able to congiure multiple files . Although CIrcle CI also use YAML , it expect only one config file in each repository.
  - **Cons:Limit build history and less feature**
    - GitHub Actions only showed the build for a week before deleting the build log.
    - While CircleCI track anlytical data on all of the jobs.
    - CircleCI introudced more builtin-features such as Manual approval/trigger.
##### Jenkins vs Github Actions
##### Pros & Cons
  - **Pros: Clearer Structure and intuitive scripts**
    - Compared to Jenkins, Github Actions uses Yaml to create workflows and configuaration files, which has clearer structure .especially when building with mulitple operating system. Jenkins uses declarative pipelien and scripted pipelines.
   ![](images/github_actions.png?raw=true)
- **Pros:Cloud hosting in Github Actions**
  - Github Actions hosts its own runner in the cloud for us to use to run jobs, while Jenkins deployment are mostly self-hosted. As user, we need to maintain the server in our own data centers, which is much more inconvenient than github actions
- **Cons: Bad at handling Ad hoc workflows**
  - Github Actions do not cater for ad hoc jobs. It listening to git events. 
  - Jenkins can handle many types of jobs including bash scripts,maven,powershell. 

## DataBase : DynamoDb

## Production website
http://csc301a1.s3-website.ca-central-1.amazonaws.com/
