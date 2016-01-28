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

          var data = [
            {id: 1, author: "First author", text: '*First* comment'},
            {id: 2, author: "Second author", text: 'Second comment'}
          ];


          var CommentBox = React.createClass({displayName: 'CommentBox',
              render: function() {
                  return (
                  <div className="commentBox">
                    <h1>Comments</h1>
                    <CommentList data={this.props.data} />
                    <CommentForm />
                  </div>
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
                  var commentNodes = this.props.data.map(function(comment){
                      return(
                        <Comment author={comment.author} key={comment.id}>
                          {comment.text}
                        </Comment>
                        );
                  });

                  return(
                    <div className="commentList">
                      {commentNodes}
                    </div>
                  );
              }
            });


          var Comment = React.createClass({
            rawMarkup: function(){
              var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
              return {__html: rawMarkup};
            },
            render: function(){
              var {author} = this.props;
              return (
                <div className="comment">
                  <h2 className="commentAuthor">
                    {this.props.author}
                  </h2>
                  <span dangerouslySetInnerHTML={this.rawMarkup()} />
                </div>
              );
            }
          });



          ReactDOM.render(
              <CommentBox data={data} />,
              document.getElementById('content')
            );
    </script>


  </body>
</html>
