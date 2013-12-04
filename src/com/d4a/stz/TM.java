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

public class TM extends Activity {

	/*This is for zooming into the middle section of the table with the Transition Metals */
	
	// Called when the activity is first created.
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.transitionmetals);
		setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);

		Button zo = (Button) findViewById(R.id.zoomout);
		zo.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				finish();
			}
		});

		Button Sc = (Button) findViewById(R.id.Sc);
		Sc.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Scandium");
			}
		});

		Button Ti = (Button) findViewById(R.id.Ti);
		Ti.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Titanium");
			}
		});

		Button V = (Button) findViewById(R.id.V);
		V.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Vanadium");
			}
		});

		Button Cr = (Button) findViewById(R.id.Cr);
		Cr.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Chromium");
			}
		});

		Button Mn = (Button) findViewById(R.id.Mn);
		Mn.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Manganese");
			}
		});

		Button Fe = (Button) findViewById(R.id.Fe);
		Fe.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Iron");
			}
		});

		Button Co = (Button) findViewById(R.id.Co);
		Co.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Cobalt");
			}
		});

		Button Ni = (Button) findViewById(R.id.Ni);
		Ni.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Nickel");
			}
		});

		Button Cu = (Button) findViewById(R.id.Cu);
		Cu.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Copper");
			}
		});

		Button Zn = (Button) findViewById(R.id.Zn);
		Zn.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Zinc");
			}
		});

		Button Y = (Button) findViewById(R.id.Y);
		Y.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Yttrium");
			}
		});

		Button Zr = (Button) findViewById(R.id.Zr);
		Zr.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Zirconium");
			}
		});

		Button Nb = (Button) findViewById(R.id.Nb);
		Nb.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Niobium");
			}
		});

		Button Mo = (Button) findViewById(R.id.Mo);
		Mo.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Molybdenum");
			}
		});

		Button Tc = (Button) findViewById(R.id.Tc);
		Tc.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Technetium");
			}
		});

		Button Ru = (Button) findViewById(R.id.Ru);
		Ru.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Ruthenium");
			}
		});

		Button Rh = (Button) findViewById(R.id.Rh);
		Rh.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Rhodium");
			}
		});

		Button Pd = (Button) findViewById(R.id.Pd);
		Pd.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Palladium");
			}
		});
		Button Ag = (Button) findViewById(R.id.Ag);
		Ag.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Silver");
			}
		});
		Button Cd = (Button) findViewById(R.id.Cd);
		Cd.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Cadmium");
			}
		});
		Button La = (Button) findViewById(R.id.La);
		La.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Lanthanum");
			}
		});
		Button Hf = (Button) findViewById(R.id.Hf);
		Hf.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Hafnium");
			}
		});
		Button Ta = (Button) findViewById(R.id.Ta);
		Ta.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Tantalum");
			}
		});
		Button W = (Button) findViewById(R.id.W);
		W.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Tungsten");
			}
		});
		Button Re = (Button) findViewById(R.id.Re);
		Re.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Rhenium");
			}
		});
		Button Os = (Button) findViewById(R.id.Os);
		Os.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Osmium");
			}
		});
		Button Ir = (Button) findViewById(R.id.Ir);
		Ir.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Iridium");
			}
		});
		Button Pt = (Button) findViewById(R.id.Pt);
		Pt.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Platinum");
			}
		});
		Button Au = (Button) findViewById(R.id.Au);
		Au.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Gold");
			}
		});
		Button Hg = (Button) findViewById(R.id.Hg);
		Hg.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Mercury");
			}
		});
		Button Ac = (Button) findViewById(R.id.Ac);
		Ac.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Actinium");
			}
		});
		Button Rf = (Button) findViewById(R.id.Rf);
		Rf.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Rutherfordium");
			}
		});
		Button Db = (Button) findViewById(R.id.Db);
		Db.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Dubnium");
			}
		});
		Button Sg = (Button) findViewById(R.id.Sg);
		Sg.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Seaborgium");
			}
		});
		Button Bh = (Button) findViewById(R.id.Bh);
		Bh.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Bohrium");
			}
		});
		Button Hs = (Button) findViewById(R.id.Hs);
		Hs.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Hassium");
			}
		});
		Button Mt = (Button) findViewById(R.id.Mt);
		Mt.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Meitnerium");
			}
		});
		Button Ds = (Button) findViewById(R.id.Ds);
		Ds.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Darmstadtium");
			}
		});
		Button Rg = (Button) findViewById(R.id.Rg);
		Rg.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Roentgenium");
			}
		});
		Button Cn = (Button) findViewById(R.id.Cn);
		Cn.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Copernicium");
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
		Builder builder = new AlertDialog.Builder(TM.this);
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
					// TODO Auto-generated catch block
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
