module.exports = Phrase;

// Adds `reverse` to all strings
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
  	return this.content.toLowerCase();
  }

  //Returns the letters in the content.
  this.letters = function letters() {
    let theLetters = [];
    for (let i = 0; i < this.content.length; i++) {
      if (this.content.chartAt(i).match(/[a-zA-Z]/)) {
        theLetters.push(this.content.chartAt(i));
      }
    }
    return theLetters.join("");
  }

  //Returns true if the phrase is a palindrome
  this.palindrome = function palindrome() {
  	return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a Tanslated Phrase objiect
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	//Returns translation processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.translation.toLowerCase();
	}
}

TranslatedPhrase.prototype = new Phrase();