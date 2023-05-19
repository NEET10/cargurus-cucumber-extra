package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FindTheDealerPage extends Utility {
    private static final Logger log = LogManager.getLogger(FindTheDealerPage.class.getName());

    public FindTheDealerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Find a Car Dealership Near You')]")
    WebElement verifyFindACarDealershipNearYouText;

    @CacheLookup
    @FindBy(xpath = "//a[@data-gtm-value='title']")
    List<WebElement> listOfDealer;

    public String verifyFindACarDealershipNearYouText() {
        log.info("Verify New And Used Car text " + verifyFindACarDealershipNearYouText.toString());
        return getTextFromElement(verifyFindACarDealershipNearYouText);
    }
    public void verifyDealerNamesAreDisplayed(String dealers) {
        List<WebElement> list = listOfDealer;
        for (WebElement e : list) {
            System.out.println(e.getText());
            if (e.getText().equals(dealers)) {
                break;
            }
        }
    }
}