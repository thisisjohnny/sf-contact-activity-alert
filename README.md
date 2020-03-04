# Salesforce Contact Activity Alert
You're sitting down with your first cup of coffee in the morning and about to start hitting the phone lines and make those sales calls. You're bumping up against an issue and need to reach out to another group for help. You have to call up a vendor to for help with a warranty repair issue.

There are any number of reasons why Contacts in Salesforce can be extremely helpful. But what's not helpful is calling someone up or sending an email to an individual who doesn't work with that organization any more. This [LWC](https://developer.salesforce.com/docs/component-library/documentation/lwc) provides an easy to see alert on your screen for contacts you haven't reached out to in a while. Just a simple little word of caution to ensure you're speaking with the right people.

## What To Do
![Screenshot of Lightning App Builder in Salesforce](/images/lightning-page-builder.png)

1. Install this package in your org using the included Deploy to Salesforce button below
2. Modify your contact page using the Lightning App Builder (Setup > User Interface > Lightning App Builder)
3. Drag and drop the _Active Contact Notification_ component to your page from the Custom Lightning Components library on the left-hand side of the builder
4. Set the 'Days Since' threshold for the alert, add the message you'd like displayed on the screen, and set the [Lightning Design System](https://www.lightningdesignsystem.com/icons/#utility) icon name
5. Save and activate your Lightning App Page

## Deploy to Your Org
**This package is provided without warranty.**
This software has not been fully tested nor developed with strict security and access controls in mind. By installing this package in your org, you assume all risk of consequences and agree not to hold myself or my employer liable.

To deploy this package to your Salesforce environment, click the button below and log into your org:

<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>

----
_Made with_ ❤️&🍣 _in Reston_
