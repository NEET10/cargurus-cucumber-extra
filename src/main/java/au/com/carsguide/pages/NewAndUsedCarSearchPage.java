package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewAndUsedCarSearchPage extends Utility {
    private static final Logger log = LogManager.getLogger(NewAndUsedCarSearchPage.class.getName());

    public NewAndUsedCarSearchPage() {
        PageFactory.initElements(driver, this);
    }
   /* @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement verifyNewAndUsedCarText;
    @CacheLookup
    @FindBy(id = "makes")
    WebElement carMakesTab;
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']/option")
    List<WebElement> carMakesList;
    @CacheLookup
    @FindBy(id = "models")
    WebElement carModelsTab;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']/option")
    List<WebElement> carModelsList;
    @CacheLookup
    @FindBy(id = "locations")
    WebElement carLocationsTab;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']/option")
    List<WebElement> carLocationsList;
    @CacheLookup
    @FindBy(id = "priceTo")
    WebElement carPriceTab;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']/option")
    List<WebElement> carPriceList;
    @CacheLookup
    @FindBy(id = "search-submit")
    WebElement findMyNextCarTab;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement makesText;



    public String verifyGetNewAndUsedCarText(){
        log.info("Verify New And Used Car text "+verifyNewAndUsedCarText.toString());
        return getTextFromElement(verifyNewAndUsedCarText);
    }
    public void selectCarMakes(String carMakes){
        log.info("Select "+carMakes+" from "+carMakesList.toString());
        clickOnElement(carMakesTab);
        List<WebElement> ListOfCars =getListOfElements(carMakesList);
        for (WebElement car:ListOfCars){
            if (car.getText().equalsIgnoreCase(carMakes)){
                car.click();
                break;
            }
        }
    }
    public void selectCarModels(String carModels){
        log.info("Select "+carModels+" from "+carModelsList.toString());
        clickOnElement(carModelsTab);
        List<WebElement> ListOfCars =getListOfElements(carModelsList);
        for (WebElement car:ListOfCars){
            if (car.getText().equalsIgnoreCase(carModels)){
                car.click();
                break;
            }
        }
    }
    public void selectCarLocations(String carLocations){
        log.info("Select "+carLocations+" from "+carLocationsList.toString());
        clickOnElement(carLocationsTab);
        List<WebElement> ListOfCars =getListOfElements(carLocationsList);
        for (WebElement car:ListOfCars){
            if (car.getText().equalsIgnoreCase(carLocations)){
                car.click();
                break;
            }
        }
    }
    public void selectCarPrice(String carPrice){
        log.info("Select "+carPrice+" from "+carPrice.toString());
        clickOnElement(carPriceTab);
        List<WebElement> ListOfCars =getListOfElements(carPriceList);
        for (WebElement car:ListOfCars){
            if (car.getText().equalsIgnoreCase(carPrice)){
                car.click();
                break;
            }
        }
    }
    public void clickOnFindMyNextCarTab(){
        log.info("Click on Find my next car Tab "+ findMyNextCarTab.toString());
        clickOnElement(findMyNextCarTab);
    }
    public void selectMake(String make){
        selectByVisibleTextFromDropDown(carMakesTab,make);
    }

    public void selectModel(String model){
        selectByVisibleTextFromDropDown(carModelsTab,model);
    }

    public void selectLocation(String location) {
        selectByVisibleTextFromDropDown(carLocationsTab, location);
    }

    public void selectPrice(String price) {
        selectByVisibleTextFromDropDown(carPriceTab, price);
    }
    public String getMakesText() {
        return getTextFromElement(makesText);
    }

*/
   @CacheLookup
   @FindBy(xpath = "//select[@id='makes']")
   WebElement makeElement;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelElement;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationElement;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceElement;
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement  findNextCarsElement;
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='New & Used Car Search - carsguide']")
    WebElement newAndUsedCarSearchText;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement makesText;



    public void selectMake(String make){

        explicitWait();selectByVisibleTextFromDropDown(makeElement,make);
    }

    public void selectModel(String model){

        explicitWait();selectByVisibleTextFromDropDown(modelElement,model);
    }

    public void selectLocation(String location) {

        explicitWait();selectByVisibleTextFromDropDown(locationElement, location);
    }

    public void selectPrice(String price) {

        explicitWait();selectByVisibleTextFromDropDown(priceElement, price);
    }

    public void clickOnFindNextCarTab(){
        clickOnElement(findNextCarsElement);
    }

    public String getNewAndUsedCarSearchText(){
        return getTextFromElement(newAndUsedCarSearchText);
    }

    public String getMakesText() {
        return getTextFromElement(makesText);
    }
}