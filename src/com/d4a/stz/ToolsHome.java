package com.d4a.stz;

import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.view.Menu;
import android.view.View;
import android.view.Window;
import android.widget.Button;

import com.d4a.stz.R;


public class ToolsHome extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.toolshome);
		// Here is code to go grab and layout the Buttons, they're named b1, b2, etc. and identified as such.     
	    Button math =(Button)findViewById(R.id.mathbttn);
	    Button science =(Button)findViewById(R.id.science);
	 // Setup the listeners for the buttons, and the button handler      
	    math.setOnClickListener(buttonhandler);
	    science.setOnClickListener(buttonhandler);
	    
	}           
    View.OnClickListener buttonhandler=new View.OnClickListener() { 

   // Now I need to determine which button was clicked, and which intent or activity to launch.         
      public void onClick(View v) {
   switch(v.getId()) { 

   
// Now, which button did they press, and take me to that class/activity

   case R.id.mathbttn:    //<<---- notice end line with colon, not a semicolon
      Intent myIntent1 = new Intent(ToolsHome.this, Main.class);
ToolsHome.this.startActivity(myIntent1);
  break;
  
   case R.id.science:    //<<---- notice end line with colon, not a semicolon
	      Intent myIntent2 = new Intent(ToolsHome.this, SciHome.class);
	ToolsHome.this.startActivity(myIntent2);
	  break;
  
   } 
 } 
};
}


