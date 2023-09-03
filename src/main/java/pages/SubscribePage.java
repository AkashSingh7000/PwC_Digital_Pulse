package pages;

import io.cucumber.datatable.DataTable;
import manager.FileReaderManager;
import org.openqa.selenium.*;
import org.testng.Assert;
import utils.Wait;
import java.util.List;
import java.util.Map;

//This will handle all the object and methods of Subscribe page.
public class SubscribePage {

    WebDriver driver;
    Integer timeout = (int)FileReaderManager.getInstance().getConfigReader().getImplicitlyWait();

    private static final String PAGE_TITLE = "//h2[contains(text(), 'Subscribe')]";
    private static final String RECAPTCHAIFRAME = "//iframe[@title='reCAPTCHA']";
    private static final String FIELDS = "//label[contains(text(),'$value$')]";
    private static final String FIELDREQUIRED = "//label[contains(text(),'$value$')]/span[@class='required']";

    private static final String FIELDNOTREQUIRED = "//label[contains(text(),'$value$')]";
    private static final String TYPEOFFIELD ="//label[contains(text(),'$value$')]/following-sibling::input";

    private static final String DROPDOWNFIELD = "//label[contains(text(),'$value$')]/following-sibling::select";

    private static final String RECAPTCHA = "//div[text()='reCAPTCHA']";


    public SubscribePage(WebDriver driver) {
        this.driver = driver;
    }



    //Verify subscribe page is opened.
    public void verifySubscribePageOpened(){

        By TitleText = By.xpath(PAGE_TITLE);
        WebElement element = Wait.untilVisible(driver, TitleText, timeout);
        Assert.assertTrue(element.isDisplayed());
    }

    //Verify the form fields in the subscribe page.
    public void verifyFields(DataTable dataTable) throws InterruptedException {

        List<Map<String, String>> user = dataTable.asMaps(String.class, String.class);

        for(Map<String, String> row:user) {

            String typeOfField =  row.get("Type");

            if (typeOfField.equals("text") || typeOfField.equals("email")) {

                String filedName = FIELDS.replace("$value$", row.get("Field"));
                String reqElement = FIELDREQUIRED.replace("$value$", row.get("Field"));
                String notReqElement = FIELDNOTREQUIRED.replace("$value$", row.get("Field"));
                String typeOfFieldElement = TYPEOFFIELD.replace("$value$", row.get("Field"));

                WebElement element = driver.findElement(By.xpath(filedName));
                Assert.assertTrue(element.isDisplayed());

                String required = row.get("Required");
                if (required.equals("true")) {
                    WebElement reqelement = driver.findElement(By.xpath(reqElement));
                    Assert.assertTrue(reqelement.isDisplayed());
                }
                else {
                    WebElement notReqelement = driver.findElement(By.xpath(notReqElement));
                    Assert.assertTrue(notReqelement.isDisplayed());
                }

                String type = row.get("Type");
                WebElement typeOfElement = driver.findElement(By.xpath(typeOfFieldElement));
                String elementType = typeOfElement.getAttribute("type");
                Assert.assertEquals(type, elementType);

            }
            else
            {
                String filedName = FIELDS.replace("$value$", row.get("Field"));
                String reqElement = FIELDREQUIRED.replace("$value$", row.get("Field"));
                String dropdownfield = DROPDOWNFIELD.replace("$value$", row.get("Field"));

                WebElement element = driver.findElement(By.xpath(filedName));
                Assert.assertTrue(element.isDisplayed());

                String required = row.get("Required");
                if (required.equals("true")) {
                    WebElement reqelement = driver.findElement(By.xpath(reqElement));
                    Assert.assertTrue(reqelement.isDisplayed());
                }

                WebElement dropdownelement = driver.findElement(By.xpath(dropdownfield));
                Assert.assertTrue(dropdownelement.isDisplayed());


            }
        }
    }

    //Verify the reCaptcha.
    public void verifyRecaptcha()
    {

        driver.switchTo().frame(driver.findElement(By.xpath(RECAPTCHAIFRAME)));
        By reCaptchaElement = By.xpath(RECAPTCHA);
        WebElement element = Wait.untilVisible(driver, reCaptchaElement, timeout);
        Assert.assertTrue(element.isDisplayed());
    }


}