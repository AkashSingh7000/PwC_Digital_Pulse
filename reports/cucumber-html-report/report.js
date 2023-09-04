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
        "Job Title",
        "true",
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
        "Job Title",
        "true",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//label[contains(text(),\u0027Job Title\u0027)]/following-sibling::input\"}\n  (Session info: chrome\u003d116.0.5845.141)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [195b31fe0fde9e34c10f7553f42a2e8a, findElement {using\u003dxpath, value\u003d//label[contains(text(),\u0027Job Title\u0027)]/following-sibling::input}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.141, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\AKUMAR~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50816}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50816/devtoo..., se:cdpVersion: 116.0.5845.141, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 195b31fe0fde9e34c10f7553f42a2e8a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat pages.SubscribePage.verifyFields(SubscribePage.java:68)\r\n\tat stepDefinations.SubscribePageSteps.iAmPresentedWithTheBelowFields(SubscribePageSteps.java:34)\r\n\tat ✽.I am presented with the below fields(src/test/resources/features/ColumnVerification.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I will need to complete Google reCAPTCHA before I can complete my request",
  "keyword": "And "
});
formatter.match({
  "location": "SubscribePageSteps.iWillNeedToCompleteGoogleReCAPTCHABeforeICanCompleteMyRequest()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
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