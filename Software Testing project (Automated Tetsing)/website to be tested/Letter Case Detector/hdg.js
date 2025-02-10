// package com.fb;
// import org.openqa.selenium.By;
// import org.openqa.selenium.WebDriver;
// import java.util.Scanner;
// import org.openqa.selenium.chrome.ChromeDriver;
// public class my_proj_01 {

// 	public static void main(String[] args) throws InterruptedException{
// 		//Scanner to accept user input
// 		Scanner x=new Scanner(System.in);
// 		System.out.print("Please enter some word/name: ");
// 		String input=x.nextLine();
	
// 		//setting WebDriver
// 		WebDriver dri= new ChromeDriver();

// 		dri.get("http://127.0.0.1:5500/Letter%20Case%20Detector.html");
// 		Thread.sleep(1000);
// 				//sending input
// 		dri.findElement(By.id("abc")).sendKeys(input);
// 		Thread.sleep(2000);
// 		//clicking the button
// 		dri.findElement(By.id("button01")).click();
// 		Thread.sleep(2000);
// 		//getting the output 
// 		String output_uc=dri.findElement(By.id("h22")).getText();
// 		String output_lc=dri.findElement(By.id("h23")).getText();
// 		Thread.sleep(2000);
// 		//expected output for input
// 		int expected_output_uc=0;
// 		int expected_output_lc=0;
		
// 		for (int i = 0; i < input.length(); i++) {
// 		    char letter = input.charAt(i);
// 		    if (letter >= 'a' && letter <= 'z') {
// 		    	expected_output_lc++;
// 		    	} 
// 		    else if (letter >= 'A' && letter <= 'Z') {
// 		    	expected_output_uc++;
// 		    }
// 		}
		
// 		//parsing actual values from output
// 		int actual_ouput_uc=Integer.parseInt(output_uc.replaceAll("\\D",""));
// 		int actual_ouput_lc=Integer.parseInt(output_lc.replaceAll("\\D",""));
		
// 		boolean testCasePassed =(expected_output_uc == actual_ouput_uc  &&  expected_output_lc == actual_ouput_lc);
// 		//checking
// 		if(testCasePassed) {
// 			 System.out.println("Test Case Passed Succesfully!");
// 		}
// 		else {
// 			System.out.println("Test Case Failed!");
// 			    System.out.println("Test Case Failed!");
// 			    System.out.println("Expected Lowercase: " + expected_output_lc);
// 	            System.out.println("Actual Lowercase: " + actual_ouput_uc);
// 	            System.out.println("Expected Uppercase: " + expected_output_uc);
// 	            System.out.println("Actual Uppercase: " + actual_ouput_lc);
			    
// 			    System.out.println("Input: " + input);
// 			    System.out.println("Output Lowercase Text: " + output_lc);
// 			    System.out.println("Output Uppercase Text: " + output_uc);
			    
// 		}
		
		
// 		dri.close();

// 	}
// }