package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UsedCarsPage extends Utility {
    private static final Logger log = LogManager.getLogger(UsedCarsPage.class.getName());

    public UsedCarsPage() {
        PageFactory.initElements(driver, this);
    }
   /* @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Used Cars For Sale')]")
    WebElement verifyUsedCarForSaleText;
    public String verifyUsedCarForSaleText(){
        log.info("Verify New And Used Car text "+verifyUsedCarForSaleText.toString());
        return getTextFromElement(verifyUsedCarForSaleText);
    }*/
   @CacheLookup
   @FindBy(xpath = "//h1[normalize-space()='Used Cars For Sale']")
   WebElement usedCarText;

    public String getUsedCarForSaleText() {
        return getTextFromElement(usedCarText);
    }
}
