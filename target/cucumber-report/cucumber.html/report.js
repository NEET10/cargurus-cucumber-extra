$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A4",
        "QLD - All",
        "$45,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "1 Series",
        "ACT - All",
        "$40,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Honda",
        "Beat",
        "NSW - All",
        "$50,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "MG",
        "3",
        "QLD - All",
        "$60,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Mazda",
        "6",
        "QLD - All",
        "$35,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Ford",
        "Mustang",
        "NSW - Illawarra",
        "$90,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10876820300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 366081400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 959892100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2530324200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 445821300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 214437700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A4",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 184449100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 180143500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 149776500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2542423000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 334650300,
  "status": "passed"
});
formatter.after({
  "duration": 907260400,
  "status": "passed"
});
formatter.before({
  "duration": 5627604600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"1 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2687880600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2532372000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 422816700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 180099300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 216798200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 193932600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 167333800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2832806300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 402718500,
  "status": "passed"
});
formatter.after({
  "duration": 993035000,
  "status": "passed"
});
formatter.before({
  "duration": 5352033700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Beat\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2679270100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2431594200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 434144300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 131314700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beat",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 175566800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 153664700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 141481700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2676262000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 68128500,
  "status": "passed"
});
formatter.after({
  "duration": 1197923400,
  "status": "passed"
});
formatter.before({
  "duration": 6866185400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"MG\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"MG\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1162571600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3835381800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 447410600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 158790500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 163854800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 137879900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 163569800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2456631500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 323044700,
  "status": "passed"
});
formatter.after({
  "duration": 924376200,
  "status": "passed"
});
formatter.before({
  "duration": 6519254200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 9262556500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 7313228900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 471687700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 682477600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 273794600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 165745400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 293921700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6622828100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 238388200,
  "status": "passed"
});
formatter.after({
  "duration": 1051206400,
  "status": "passed"
});
formatter.before({
  "duration": 7950478900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Mustang\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Illawarra\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 202300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 3942428900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3880810100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 823763000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 218028200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mustang",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 328383100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Illawarra",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 213483100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 178731800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3286025200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 377679200,
  "status": "passed"
});
formatter.after({
  "duration": 844866600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 37,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A4",
        "QLD - All",
        "$45,000"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "1 Series",
        "ACT - All",
        "$40,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Honda",
        "Beat",
        "NSW - All",
        "$50,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "MG",
        "3",
        "QLD - All",
        "$60,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Mazda",
        "6",
        "QLD - All",
        "$35,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Ford",
        "Mustang",
        "NSW - Illawarra",
        "$90,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10950237900,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"A4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 96900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 210164600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2792296100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 713940600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 228811300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A4",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 414769000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 293209700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 158282500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2892870100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 314928000,
  "status": "passed"
});
formatter.after({
  "duration": 874414500,
  "status": "passed"
});
formatter.before({
  "duration": 11430488700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"1 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1507948800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2935634900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 430846400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 181759300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 180750000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 132229800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 124346300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3237628800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 426916200,
  "status": "passed"
});
formatter.after({
  "duration": 902093500,
  "status": "passed"
});
formatter.before({
  "duration": 8386480600,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Beat\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 65500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1187962800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2324659200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 302276300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 117048300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beat",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 215180500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 151651800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 134567000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2080012000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 426621600,
  "status": "passed"
});
formatter.after({
  "duration": 989544800,
  "status": "passed"
});
formatter.before({
  "duration": 5380559600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"MG\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"MG\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 87700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1156015400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 267986000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 2155374500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 146514900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 140869300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 155019500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 137487600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2412668500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 256559300,
  "status": "passed"
});
formatter.after({
  "duration": 836528900,
  "status": "passed"
});
formatter.before({
  "duration": 4404923500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 626035300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1151526700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 2049512600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 397281000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 132730600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 137308400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 131309300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2637898600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 55187100,
  "status": "passed"
});
formatter.after({
  "duration": 784095800,
  "status": "passed"
});
formatter.before({
  "duration": 4940295300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Mustang\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - Illawarra\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1373348000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2964835000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 477747300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 199319800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mustang",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 318783100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Illawarra",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 147689900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 126560800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2550324000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 422584800,
  "status": "passed"
});
formatter.after({
  "duration": 921506300,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 2,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"\u003cdealersName\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 11,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7"
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 18,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5238218400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1294031000,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 178864900,
  "error_message": "org.openqa.selenium.interactions.MoveTargetOutOfBoundsException: move target out of bounds\n  (Session info: chrome\u003d113.0.5672.127)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a5229c99b7df3bdfc0c86878e12e44cb, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@69a5c6be]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\neetg\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53226}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53226/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a5229c99b7df3bdfc0c86878e12e44cb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat au.com.carsguide.utility.Utility.mouseHoverToElementAndClick(Utility.java:249)\r\n\tat au.com.carsguide.pages.HomePage.clickOnFindDealer(HomePage.java:49)\r\n\tat au.com.carsguide.steps.FindADealerSteps.iClickFindADealer(FindADealerSteps.java:18)\r\n\tat ✽.And I click ‘Find a Dealer’(finddealers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FindADealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 31
    }
  ],
  "location": "FindADealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3743268400,
  "status": "passed"
});
formatter.before({
  "duration": 6995098100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"4WD Specialist Group\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2532118200,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1682637200,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 233348200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WD Specialist Group",
      "offset": 31
    }
  ],
  "location": "FindADealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 140739300,
  "status": "passed"
});
formatter.after({
  "duration": 733703900,
  "status": "passed"
});
formatter.before({
  "duration": 6125407200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 254920200,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 536744900,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 456708500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 31
    }
  ],
  "location": "FindADealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 1174070100,
  "status": "passed"
});
formatter.after({
  "duration": 714157500,
  "status": "passed"
});
formatter.before({
  "duration": 7923566500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"A \u0026 M Car Sales Pty Ltd\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1818200,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 527323500,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1744061300,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 251252000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A \u0026 M Car Sales Pty Ltd",
      "offset": 31
    }
  ],
  "location": "FindADealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 135820300,
  "status": "passed"
});
formatter.after({
  "duration": 747928500,
  "status": "passed"
});
formatter.before({
  "duration": 6162331100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"A1 MOTORS COMPANY\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 62200,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1443512700,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 2251480600,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 57262600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 MOTORS COMPANY",
      "offset": 31
    }
  ],
  "location": "FindADealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 150008600,
  "status": "passed"
});
formatter.after({
  "duration": 759389900,
  "status": "passed"
});
formatter.before({
  "duration": 5576235000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"ANDREA MOTORI SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 949166200,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 2181864500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom no such window\n  (Session info: chrome\u003d113.0.5672.127)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ec1d1af58a5c375d64e62c386fbc4612, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@6aad919c]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\neetg\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54505}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54505/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ec1d1af58a5c375d64e62c386fbc4612\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat au.com.carsguide.utility.Utility.mouseHoverToElementAndClick(Utility.java:249)\r\n\tat au.com.carsguide.pages.HomePage.clickOnFindDealer(HomePage.java:49)\r\n\tat au.com.carsguide.steps.FindADealerSteps.iClickFindADealer(FindADealerSteps.java:18)\r\n\tat ✽.And I click ‘Find a Dealer’(finddealers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FindADealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTORI SERVICE",
      "offset": 31
    }
  ],
  "location": "FindADealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2476936800,
  "status": "passed"
});
formatter.before({
  "duration": 6692260400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"Oxford Motors\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindADealerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2074479700,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1837431500,
  "status": "passed"
});
formatter.match({
  "location": "FindADealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 68639600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford Motors",
      "offset": 31
    }
  ],
  "location": "FindADealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 278089400,
  "status": "passed"
});
formatter.after({
  "duration": 708091100,
  "status": "passed"
});
});