First, find the output from Google Fonts that you previously saved from What will your website look like?. Add the <link> element somewhere inside your index.html's head (anywhere between the <head> and </head> tags). It looks something like this:
HTML
Copy to Clipboard

<link
  href="https://fonts.googleapis.com/css?family=Open+Sans"
  rel="stylesheet" />
This code links your page to a style sheet that loads the Open Sans font family with your webpage.
Next, delete the existing rule you have in your style.css file. It was a good test, but let's not continue with lots of red text.
Add the following lines (shown below), replacing the font-family assignment with your font-family selection from What will your website look like?. The property font-family refers to the font(s) you want to use for text. This rule defines a global base font and font size for the whole page. Since <html> is the parent element of the whole page, all elements inside it inherit the same font-size and font-family.
CSS
Copy to Clipboard

html {
  font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
  font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
}
Note: Anything in CSS between /* and */ is a CSS comment. The browser ignores comments as it renders the code. CSS comments are a way for you to write helpful notes about your code or logic.

Now let's set font sizes for elements that will have text inside the HTML body (h1, <li>, and <p>). We'll also center the heading. Finally, let's expand the second ruleset (below) with settings for line height and letter spacing to make body content more readable.
CSS
Copy to Clipboard

h1 {
  font-size: 60px;
  text-align: center;
}

p,
li {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
}
Adjust the px values as you like. Your work-in-progress should look similar to this:

