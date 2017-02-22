// Define a function named hasClass that takes in two arguments.
//   element   (Any DOM element)
//   className (String)
//
// The function will return true if the element has the specified className CSS
// class applied.
  function hasClass(element, className) {
    return $(element).hasClass(className)
  }


// Define a function named toggleVisible that takes in one argument.
//   div (<div> DOM element)
//
// The function will add the 'visible' class to the div if it does not currently
// have it. It removes the class if it already exists.

function toggleVisible(div) {
  return $(div).toggleClass('visible')
}


// Define a function named hideConfidentialText that takes in one argument.
//   article (<article> DOM element)
// Assume the article contains at least one paragraph.
//
// The function will hide any child paragraphs of article if anywhere the text contains
// "CONFIDENTIAL"
function hideConfidentialText(article) {
  return $(article).children("p:contains('CONFIDENTIAL')").hide()
}

// Define a function named checkAll that takes in one argument
//   checkbox (<input type="checkbox"> DOM element).
//
// The function will mark all sibling checkboxes, of the input checkbox, as "checked" if the input checkbox
// is marked as "checked".
function checkAll(checkbox) {
  return $(checkbox).siblings(":checkbox").prop("checked", checkbox.checked)
}


// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise.
function updateTodoList(todoList) {
  $(todoList).children('li:contains("COMPLETED")').remove(); $(todoList).children('li:contains("URGENT")').addClass("important")
}


// Define a function named createList that takes one argument.
//   sites (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>
function createList(sites) {
  var ul = $('<ul></ul>');
  $.each(sites, function(key, value) {
      ul.append($('<li></li').append($('<a></a>').attr('href',value).text(key)))
      console.log(ul)
  })
  return ul[0]
}




// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.
  function extractQuote(article) {
    let oldP = $(article).children('p').first();
    let quote1 = oldP.text().indexOf('"');
    let quote2 = oldP.text().lastIndexOf('"');
    let fullQuote = oldP.text().substring(quote1, quote2+1);
    let block = $('<blockquote>').text(fullQuote);

    if (quote1 >= 0) {
      oldP.replaceWith(block)
    }
  }

// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.
function createTable(data) {
  let table = $('<table>');
  let head = $('<thead>');
  let body = $('<tbody>');
  let foot = $('<tfoot>');

  table.append(head);
  table.append(body);
  table.append(foot);

  let top = data[0];
  let bottom = data[data.length-1]

  for (var i = 0; i < data.length; i++) {
    let row = data[i];
    if (row === top) {
      let tr = $('<tr>');
      head.append(tr);
      for (var letter of row) {
        let th = $('<th>');
        tr.append(th);
        th.text(letter);
      }
    }
    else if (row === bottom) {
      let tr = $('<tr>');
      foot.append(tr);
      for (var letter of row) {
        let td = $('<td>');
        tr.append(td);
        td.text(letter);
      }
    }
    else {
      let tr = $('<tr>');
      body.append(tr);
      for (var letter of row) {
        let td = $('<td>');
        tr.append(td);
        td.text(letter);
      }
    }
  }
  return table[0]
}
