package au.com.carsguide.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.NewAndUsedCarSearchPage;
import au.com.carsguide.pages.UsedCarsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class BuySteps {

    @When("^I mouse hover on buy\\+sell tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuyPlusSellTab();
    }

    @And("^I click Search Cars link$")
    public void iClickSearchCarsLink() throws InterruptedException {
        new HomePage().mouseHoverOnBuyPlusSellTabAndCLickOnSearchCars();
    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        String expectedMessage = "New & Used Car Search - carsguide";
        String actualMessage = new NewAndUsedCarSearchPage().getNewAndUsedCarSearchText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {

        new NewAndUsedCarSearchPage().selectMake(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new NewAndUsedCarSearchPage().selectModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {
        new NewAndUsedCarSearchPage().selectLocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {
        new NewAndUsedCarSearchPage().selectPrice(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarSearchPage().clickOnFindNextCarTab();
    }


    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String expectedMessage) {
        String actualMessage = new NewAndUsedCarSearchPage().getMakesText();
        //  String[] actmsg = actualMessage.split(" ");
        Assert.assertTrue(actualMessage.contains(expectedMessage));
    }

    @And("^I click ‘Used’ link$")
    public void iClickUsedLink() throws InterruptedException {
        new HomePage().mouseHoverOnBuyPlusSellTabAndCLickOnUsedLink();
    }

    @Then("^I navigate to ‘Used Cars For Sale’ page$")
    public void iNavigateToUsedCarsForSalePage() {
        String expectedMessage = "Used Cars For Sale";
        String actualMessage = new UsedCarsPage().getUsedCarForSaleText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }
}
