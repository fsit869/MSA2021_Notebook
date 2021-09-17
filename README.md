# MSA2021_Notebook



<i> 
This project was created for MSA Phase 2, 2021 <br/>
General software stream <br/>
By Frank Situ
</i>

<h1> Project description </h1>
<a href="https://mymsanotes.netlify.app">Front end link</a>
<br/>
<a href="https://msa-notes-backend.herokuapp.com/">Back end link</a>

<p>
This project contains a web app, which allows the user to create and display notes. 
<li> Backend written in Java using Spring Framework (Approved by MSP)</li>
<li> Front end hosted using Netlify, (Hosting using Azure and github pipelines was attempted) </li>
<li> Backend API hosted using Heroku </li>
<li> MongoDB used for database, hosted using Mongo Atlas </li>

</p>

<h2> Basic requirements </h2>
<li> Web app written using Typescript + react </li>
<li> Web app uses GraphQL. Spring framework was used. (Approved by MSP) </li>
<li> Apollo Client was used for fetching data from backend </li>
<li> Material UI used for styled library/components </li>
<li> Website is responsive </li>

<h2> Advanced requirements </h2>
<li> Components integrated with Storybook </li>
<li> Unit testing was used on note display component </li>
<li> React Router was used to handle navigation </li>
<li> Custom branding/theme used. Logo was created from scratch </li>
<li> NOSQL database used. (MongoDB, hosted using Mongo Atlas) </li>

<h1> Difficulties during the project </h1>
<li> Integrating Oauth2 for verification. A week was spent on trying to get Oauth2 to work. However I had multiple issues connecting the frontend and backend together. </li>
<li> CORS security policy. Fixed by added security config with Spring boot </li>
<li> Deployment using Github actions & Azure. Github actions was working, however Azure kept displaying "permission issues". Narrowed down error to React Router and relative URI. Unable to fix problem (A total of 31 commits was done), resulted to using Netlify </li>

