package com.page;
import java.util.Scanner;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class Second_test {

	//entering the input got from the user
	public static void main(String[] args) throws InterruptedException{
		//getting input from the user
		Scanner h= new Scanner(System.in);
		System.out.print("Kindly enter some word/name:");
		String input = h.nextLine();
		//creating object for chrome driver
		WebDriver dry=new ChromeDriver();
		
		//make sure the link in driv.get is the same as for the website you are going to test
		dry.get("http://127.0.0.1:5500/Letter%20Case%20Detector.html");
		dry.findElement(By.id("abc")).sendKeys(input);
		Thread.sleep(2000);
		dry.findElement(By.id("button01")).click();
		Thread.sleep(2000);
		//getting the values from the output
		String output_LC=dry.findElement(By.id("h22")).getText();
		String output_UC=dry.findElement(By.id("h23")).getText();
		//getting the output in digits
		int actual_output_LC= Integer.parseInt(output_LC.replaceAll("\\D", ""));
		int actual_output_UC= Integer.parseInt(output_UC.replaceAll("\\D", ""));
		
		//let's calculate the expected output
		int expected_output_LC=0;
		int expected_output_UC=0;
		
		for (int i = 0; i < input.length(); i++) {
		    char letter = input.charAt(i);
		    if (letter >= 'a' && letter <= 'z') {
		    	expected_output_LC++;
		    	} 
		    else if (letter >= 'A' && letter <= 'Z') {
		    	expected_output_UC++;
		    	};
		    }
		//showing test case result/status
		if(actual_output_LC == expected_output_LC && actual_output_UC == expected_output_UC) {
			System.out.println("Test case passed succesfully!");
		}
		else {
			System.out.println("Test case fail!");
			System.out.println("Actual_output_LC= "+actual_output_LC + "  Expected_output_LC= "+expected_output_LC);
			System.out.println("Actual_output_UC= " + actual_output_UC +" Expected_output_UC= " + expected_output_UC);
		}
//		System.out.println("Code executed sucessfully! " + output_LC +" " + output_UC );
		
		
		
		dry.close();
	}

}

//YOU CAN PRESS (CTRL + M) FOR VIEWING TEST CASE IN FULL SCREEN FOR WINDOWS 10
