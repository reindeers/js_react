<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Tutorial</title>
    <!-- Not present in the tutorial. Just for basic styling. -->
    <link rel="stylesheet" href="css/base.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
  </head>
  <body>
    <div id="content"></div>
    <!-- <script type="text/babel" src="scripts/example.js"></script>-->
    <script type="text/babel">
          var CommentBox = React.createClass({displayName: 'CommentBox',
              render: function() {
                  return (
                    React.createElement('div', {className: 'commentBox'}, 
                      React.createElement('h1', null, "Comments"),
                      React.createElement(CommentList, null),
                      React.createElement(CommentForm, null)
                     )
                  );
              }
          });

          var CommentForm = React.createClass({displayName: 'CommentForm',
              render: function() {
                  return (
                    React.createElement('div', {className: 'commentForm'}, 
                      'Form'
                      )
                  );
              }
          });

          var CommentList = React.createClass({
              render: function() {
                  return (
                    React.createElement('div', {className: 'commentList'}, 
                      React.createElement(Comment, {author: "First author"}, 'First comment'),
                      React.createElement(Comment, {author: "Second author"}, 'Second comment')
                    )
                  );
              }
          });


          var Comment = React.createClass({
            render: function(){
              var {author} = this.props;
              return (
                <div className="comment">
                  <h2 className="commentAuthor">
                    {this.props.author}
                  </h2>
                  {this.props.children}
                </div>
              );
            }
          });



          ReactDOM.render(
            React.createElement(CommentBox, null),
            document.getElementById('content')
            );
    </script>


  </body>
</html>
