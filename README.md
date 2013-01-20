Sneakemail Filler
=====
*Chrome Extension*

This **in progress** extension inserts a domain-specific sneakemail address into your active form field, via context menu.

*Example usage*

On the account creation form on www.rackspace.com, the extension will add a context menu item to every form field.  You click into the email field, right click, and select "Insert sneakemail address".  The extenion will search your sneakemail account for an email address named "rackspace.com" and fill in the field if the address is found.  If not found, the extension will create a new address with the domain and fill the field with that new address.  It currently uses the tld and top domain only, so my.awesome.free.page.geocities.com will look for an email address named geocities.com in your sneakemail account.

*Prerequisite*

You must have an account with sneakemail.com (no affiliation).  Sneakemail generates an email address that forwards to your primary email, giving you the ability to later shut down that individual email account in case of spam.

Until I set up a UI and localStorage scheme for authentication, store your own locally in an auth.js file in the repo

*auth.js Format*

    var credentials = {
        username : "YOUR_USER",
        password : "SECRET",
        remember_me : "true"
    }

*License*

AGPL 
Copyright 2013 Jason Carver
