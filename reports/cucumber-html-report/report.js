$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ColumnVerification.feature");
formatter.feature({
  "name": "Validate PwCDigital Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Articles Column verification of Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.step({
  "name": "I am viewing the \"\u003cPage\u003e\" page",
  "keyword": "When "
});
formatter.step({
  "name": "I am presented with \"\u003cColNum\u003e\" columns of articles",
  "keyword": "Then "
});
formatter.step({
  "name": "The Left \"\u003cLeftCol\u003e\" column is displaying \"\u003cLeftColArticlesNum\u003e\" articles",
  "keyword": "And "
});
formatter.step({
  "name": "the Middle \"\u003cMiddleCol\u003e\" column is displaying \"\u003cMiddleColArticlesNum\u003e\" articles",
  "keyword": "And "
});
formatter.step({
  "name": "The Right \"\u003cRightCol\u003e\" column is displaying \"\u003cRightColArticlesNum\u003e\" articles",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Page",
        "ColNum",
        "LeftCol",
        "MiddleCol",
        "RightCol",
        "LeftColArticlesNum",
        "MiddleColArticlesNum",
        "RightColArticlesNum"
      ]
    },
    {
      "cells": [
        "Home",
        "3",
        "2",
        "1",
        "3",
        "2",
        "1",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Articles Column verification of Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.UserIsInsideHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am viewing the \"Home\" page",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.IAmViewingThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am presented with \"3\" columns of articles",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmPresentedWithColumnsOfArticles(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Left \"2\" column is displaying \"2\" articles",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.theLeftColumnIsDisplayingArticles(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Middle \"1\" column is displaying \"1\" articles",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.theMiddleColumnIsDisplayingArticles(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Right \"3\" column is displaying \"4\" articles",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.theRightColumnIsDisplayingArticles(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Subscribe Page Fields Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.step({
  "name": "I am viewing the \"\u003cPage\u003e\" page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Subscribe navigation link",
  "keyword": "When "
});
formatter.step({
  "name": "I am taken to the Subscribe page",
  "keyword": "Then "
});
formatter.step({
  "name": "I am presented with the below fields",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Field",
        "Required",
        "Type"
      ]
    },
    {
      "cells": [
        "First Name",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Last Name",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Organisation",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Job title",
        "false",
        "text"
      ]
    },
    {
      "cells": [
        "Business Email Address",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "State",
        "true",
        "dropdown"
      ]
    },
    {
      "cells": [
        "Countries",
        "true",
        "dropdown"
      ]
    }
  ]
});
formatter.step({
  "name": "I will need to complete Google reCAPTCHA before I can complete my request",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Page"
      ]
    },
    {
      "cells": [
        "Home"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Subscribe Page Fields Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.UserIsInsideHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am viewing the \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.IAmViewingThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Subscribe navigation link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubscribeNavigationLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the Subscribe page",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscribePageSteps.iAmTakenToTheSubscribePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am presented with the below fields",
  "rows": [
    {
      "cells": [
        "Field",
        "Required",
        "Type"
      ]
    },
    {
      "cells": [
        "First Name",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Last Name",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Organisation",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Job title",
        "false",
        "text"
      ]
    },
    {
      "cells": [
        "Business Email Address",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "State",
        "true",
        "dropdown"
      ]
    },
    {
      "cells": [
        "Countries",
        "true",
        "dropdown"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SubscribePageSteps.iAmPresentedWithTheBelowFields(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will need to complete Google reCAPTCHA before I can complete my request",
  "keyword": "And "
});
formatter.match({
  "location": "SubscribePageSteps.iWillNeedToCompleteGoogleReCAPTCHABeforeICanCompleteMyRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search Page Results Count Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on the Magnifying glass icon to perform a search",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the text \"\u003cTextToEnter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I submit the search",
  "keyword": "And "
});
formatter.step({
  "name": "I am taken to the search results page",
  "keyword": "Then "
});
formatter.step({
  "name": "I am presented with at least \"\u003cMinNoResults\u003e\" search result",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TextToEnter",
        "MinNoResults"
      ]
    },
    {
      "cells": [
        "Single page applications",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Page Results Count Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.UserIsInsideHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Magnifying glass icon to perform a search",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheMagnifyingGlassIconToPerformASearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the text \"Single page applications\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iEnterTheTextSinglePageApplications(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the search",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iSubmitTheSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPageSteps.iAmTakenToTheSearchResultsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am presented with at least \"1\" search result",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.iAmPresentedWithAtLeastSearchResult(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});