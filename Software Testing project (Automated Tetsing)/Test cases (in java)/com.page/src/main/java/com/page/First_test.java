package com.page;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class First_test {
	
	//giving the input by ourself
	public static void main(String[] args)  {
		//creating object for chrome driver
		WebDriver dri= new ChromeDriver();
		//make sure the link in driv.get is the same as for the website you are going to test
		dri.get("http://127.0.0.1:5500/Letter%20Case%20Detector.html");
		dri.findElement(By.id("abc")).sendKeys("SaiRa FatIMa");
		dri.findElement(By.id("button01")).click();
		
		//getting the values from the output
				String output_LC=dri.findElement(By.id("h22")).getText();
				String output_UC=dri.findElement(By.id("h23")).getText();
		//getting the output in digits
				int actual_output_LC= Integer.parseInt(output_LC.replaceAll("\\D", ""));
				int actual_output_UC= Integer.parseInt(output_UC.replaceAll("\\D", ""));
				
		//let's write the expected output
				int expected_output_LC=6;
				int expected_output_UC=5;
		
		//showing test case result/status
				if(actual_output_LC == expected_output_LC && actual_output_UC == expected_output_UC) {
					System.out.println("Test case for given input passed succesfully!");
				}
				else {
					System.out.println("Test case for given input fail!");
					System.out.println("Actual_output_LC= "+actual_output_LC + "  Expected_output_LC= "+expected_output_LC);
					System.out.println("Actual_output_UC= " + actual_output_UC +" Expected_output_UC= " + expected_output_UC);
				}
				
				
				
		dri.close();
	}
} 
