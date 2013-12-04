package com.d4a.stz;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.widget.Button;

import com.d4a.stz.R;

public class SciHome extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
        	setContentView(R.layout.scihome);

    		// Here is code to go grab and layout the Buttons, they're named b1, b2, etc. and identified as such.     
    	    Button table =(Button)findViewById(R.id.table);
    	    Button convert =(Button)findViewById(R.id.convert);
    	    // Setup the listeners for the buttons, and the button handler      
    	    table.setOnClickListener(buttonhandler);
    	    convert.setOnClickListener(buttonhandler);
    		}           
    	    View.OnClickListener buttonhandler=new View.OnClickListener() { 

    	   // Now I need to determine which button was clicked, and which intent or activity to launch.         
    	      public void onClick(View v) {
    	   switch(v.getId()) { 

    	   
    	// Now, which button did they press, and take me to that class/activity

    	   case R.id.table:    //<<---- notice end line with colon, not a semicolon
    	      Intent myIntent1 = new Intent(SciHome.this, periodictable.class);
    	SciHome.this.startActivity(myIntent1);
    	  break;
    	  
    	   case R.id.convert:    //<<---- notice end line with colon, not a semicolon
     	      Intent myIntent2 = new Intent(SciHome.this, SciConvert.class);
     	SciHome.this.startActivity(myIntent2);
     	  break;
    	  
    	  
    	      } 
    	      } 
    	   };
    	     }
    	     