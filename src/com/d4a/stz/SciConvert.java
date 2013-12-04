package com.d4a.stz;

import com.d4a.stz.R;
import com.d4a.stz.R.layout;
import com.d4a.stz.R.menu;

import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.view.Menu;
import android.view.View;
import android.view.Window;
import android.widget.Button;

public class SciConvert extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.sciconvert);
		
		
		// Here is code to go grab and layout the Buttons, they're named b1, b2, etc. and identified as such.     
	    Button temp =(Button)findViewById(R.id.tempcal);
	    Button heat =(Button)findViewById(R.id.heatcal);
	    Button stoich =(Button)findViewById(R.id.stoich);
	    // Setup the listeners for the buttons, and the button handler      
	    temp.setOnClickListener(buttonhandler);
	    heat.setOnClickListener(buttonhandler);
	    stoich.setOnClickListener(buttonhandler);
		}    
	
	 View.OnClickListener buttonhandler=new View.OnClickListener() { 

  	   // Now I need to determine which button was clicked, and which intent or activity to launch.         
  	      public void onClick(View v) {
  	   switch(v.getId()) { 

  	   
  	// Now, which button did they press, and take me to that class/activity

  	   case R.id.tempcal:    //<<---- notice end line with colon, not a semicolon
  	      Intent myIntent1 = new Intent(SciConvert.this, TempCal.class);
  	SciConvert.this.startActivity(myIntent1);
  	  break;
  	  
  	   case R.id.heatcal:    //<<---- notice end line with colon, not a semicolon
   	      Intent myIntent2 = new Intent(SciConvert.this, HeatCal.class);
   	SciConvert.this.startActivity(myIntent2);
   	  break;
  	  
	   case R.id.stoich:    //<<---- notice end line with colon, not a semicolon
	   	      Intent myIntent3 = new Intent(SciConvert.this, Scorchcal.class);
	   	SciConvert.this.startActivity(myIntent3);
	   	  break;
	  	  	  
  	      } 
  	      } 
  	   };
  	     }
