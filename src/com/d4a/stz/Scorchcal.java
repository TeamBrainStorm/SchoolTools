package com.d4a.stz;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.view.Window;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.apache.cordova.DroidGap;

public class Scorchcal extends Activity {

	 WebView webView;


	    @Override
	    public void onCreate(Bundle savedInstanceState) {

	        super.onCreate(savedInstanceState);
	        requestWindowFeature(Window.FEATURE_NO_TITLE);
	        setContentView(R.layout.scorch);



	        WebView wv;
	        wv = (WebView) findViewById(R.id.webView);
	        wv.getSettings().setJavaScriptEnabled(true);
	        wv.loadUrl("file:///android_asset/www/chemcal/stoich.html");
	        wv.setWebViewClient(new WebViewClient());


	    }
	}
