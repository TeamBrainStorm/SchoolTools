package com.d4a.stz;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.widget.Button;

import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;

import com.d4a.stz.R;

import java.io.InputStream;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

/*This is for zooming into the left section of the table containing Alkali Metals,
 * Alkaline Earth Metals, and Hydrogen */

public class Alkaline extends Activity {

	/* Call activity to create the button layout in alkaline.xml */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.alkaline); // Set view to alkaline.xml
		setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE); // Force
		// landscape
		// mode

		/* Button to return to full table view */
		Button zo = (Button) findViewById(R.id.zoomout);
		zo.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				finish();
			}
		});

		// Buttons for elements
		Button H = (Button) findViewById(R.id.H);
		H.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Hydrogen");
			}
		});
		Button Li = (Button) findViewById(R.id.Li);
		Li.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Lithium");
			}
		});
		Button Be = (Button) findViewById(R.id.Be);
		Be.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Beryllium");
			}
		});
		Button Na = (Button) findViewById(R.id.Na);
		Na.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Sodium");
			}
		});
		Button Mg = (Button) findViewById(R.id.Mg);
		Mg.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Magnesium");
			}
		});
		Button K = (Button) findViewById(R.id.K);
		K.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Potassium");
			}
		});
		Button Ca = (Button) findViewById(R.id.Ca);
		Ca.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Calcium");
			}
		});
		Button Rb = (Button) findViewById(R.id.Rb);
		Rb.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Rubidium");
			}
		});
		Button Sr = (Button) findViewById(R.id.Sr);
		Sr.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Strontium");
			}
		});
		Button Cs = (Button) findViewById(R.id.Cs);
		Cs.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Cesium");
			}
		});
		Button Ba = (Button) findViewById(R.id.Ba);
		Ba.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Barium");
			}
		});
		Button Fr = (Button) findViewById(R.id.Fr);
		Fr.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Francium");
			}
		});
		Button Ra = (Button) findViewById(R.id.Ra);
		Ra.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Radium");
			}
		});
	}

	public String getParsedMyXML(String el) throws Exception {
		StringBuffer inLine = new StringBuffer();
		/* Get a SAXParser from the SAXPArserFactory. */
		SAXParserFactory spf = SAXParserFactory.newInstance();
		SAXParser sp = spf.newSAXParser();

		/* Get the XMLReader of the SAXParser */
		XMLReader xr = sp.getXMLReader();
		/* Create a new ContentHandler and apply it to the XML-Reader */
		XMLHandler myExampleHandler = new XMLHandler();
		myExampleHandler.setel(el);
		xr.setContentHandler(myExampleHandler);
		/* Load xml file from raw folder */
		InputStream in = this.getResources().openRawResource(R.raw.myxml);
		/* Begin parsing */
		xr.parse(new InputSource(in));
		XMLDataSet parsedExampleDataSet = myExampleHandler.getParsedData();
		inLine.append(parsedExampleDataSet.toString());
		in.close();
		return inLine.toString();

	}

	public String getvidurl(String el) throws Exception {
		StringBuffer inLine = new StringBuffer();
		/* Get a SAXParser from the SAXPArserFactory. */
		SAXParserFactory spf = SAXParserFactory.newInstance();
		SAXParser sp = spf.newSAXParser();

		/* Get the XMLReader of the SAXParser */
		XMLReader xr = sp.getXMLReader();
		/* Create a new ContentHandler and apply it to the XML-Reader */
		XMLHandler myExampleHandler = new XMLHandler();
		myExampleHandler.setel(el);
		xr.setContentHandler(myExampleHandler);
		/* Load xml file from raw folder */
		InputStream in = this.getResources().openRawResource(R.raw.myxml);
		/* Begin parsing */
		xr.parse(new InputSource(in));
		XMLDataSet parsedExampleDataSet = myExampleHandler.getParsedData();
		inLine.append(parsedExampleDataSet.getvid());
		in.close();
		return inLine.toString();

	}

	public void popup(final String el) {
		Builder builder = new AlertDialog.Builder(Alkaline.this);
		builder.setTitle(el);
		builder.setIcon(R.drawable.icon);
		OnClickListener web = new OnClickListener() {
			public void onClick(DialogInterface dialog, int which) {
				String url;
				try {
					url = getvidurl(el);
					Intent i = new Intent(Intent.ACTION_VIEW);
					i.setData(Uri.parse(url));
					startActivity(i);
				} catch (Exception e) {
					e.printStackTrace();
				}

			}
		};

		try {
			builder.setMessage(getParsedMyXML(el));
		} catch (Exception e1) {
			builder.setMessage("epic fail");
		}
		builder.setNegativeButton("Done", null);
		builder.setPositiveButton("Video", web);
		builder.show();
	}
}