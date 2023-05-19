package au.com.carsguide.steps;

import au.com.carsguide.pages.FindTheDealerPage;
import au.com.carsguide.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class FindADealerSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @And("^I click ‘Find a Dealer’$")
    public void iClickFindADealer() {
        new HomePage().clickOnFindDealer();
    }

    @Then("^I navigate to ‘car-dealers’ page$")
    public void iNavigateToCarDealersPage() {
        Assert.assertEquals("Find a Car Dealership Near You", new FindTheDealerPage().verifyFindACarDealershipNearYouText(),"Not displayed");
    }

    @And("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String dealers)  {
        // Write code here that turns the phrase above into concrete actions
        new FindTheDealerPage().verifyDealerNamesAreDisplayed(dealers);

    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuyPlusSellTab();
    }
}
