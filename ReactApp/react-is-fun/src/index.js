import React, { Component } from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-type'

const bookList = [
  {title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260},
  {title: "White Teeth", author: "Zadie Smith", pages: 480},
  {title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 308}
]

const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookMark}) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages} pages</p>
        <p>Free Bookmark Today: {freeBookMark ? 'yes!' : 'no'}</p>
    </section>
  )
}

const Hiring = () =>
    <div>
      <p>The library is hiring. Go to www.library.com/jobs for more.</p>
    </div>

const NotHiring = () =>
    <div>
      <p>The library is not hiring. Check back later for more information.</p>
    </div>


class Library extends React.Component {

  static defaultProps = {
    books: [
      {title: "Tahoe Tales", author: "Chet Whitley", pages: 1000}
    ]
  }

  state = {
    open: false,
    freeBookMark: false,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount(){
    this.setState({loading: true});
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
          .then(data => data.json())
          .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate(){
    console.log('The component just updated');
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const { books } = this.props
    return (
      <div>
         {this.state.hiring ? <Hiring /> : <NotHiring />}
         {this.state.loading
                    ? "loading"
                    : <div>
                    {this.state.data.map(product => {
                        return (
                          <div key={product.id}>
                            <h3>Library Product of the Week!</h3>
                            <h4>{product.name}</h4>
                            <img alt={product.image} src={product.image} height={100}/>
                          </div>
                        )
                    })}
                    </div>
              }

        <h1>The library is {this.state.open ? 'open' : 'closed'} </h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        { books.map(
          (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookMark={this.state.freeBookMark}></Book>)
        }
    </div>
    )
  }
}

// const Library = ({books}) => {
//   return (
//     <div>
//         {books.map(
//           (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}></Book>)
//         }
//     </div>
//   )
// }



// let skiData = {
//   total: 54.5,
//   powder : 20,
//   backcountry: 10,
//   goal: 100
// }

// const getPercent = decimal => {
//   return decimal * 100 + '%'
// }

// const calcGoalProgress = (total, goal) => {
//   return getPercent(total/goal)
// }

// const SkiDayCounter = ({total,powder, backcountry, goal}) => {
//   return (
//       <section>
//         <div>
//           <p>Total Days: {total} </p>
//         </div>
//         <div>
//           <p>Powder Days: {powder} </p>
//         </div>
//         <div>
//           <p>Backcountry Days: {backcountry} </p>
//         </div>
//         <div>
//           <p>Goal Progress: {calcGoalProgress(total, goal)} </p>
//         </div>
//     </section>
//   )
// }

// // class SkiDayCounter extends Component {

// //   getPercent = decimal => {
// //     return decimal * 100 + '%'
// //   }

// //   calcGoalProgress = (total, goal) => {
// //     return this.getPercent(total/goal)
// //   }

// //   render() {
// //     const {total, powder, backcountry, goal } = this.props
// //     return (

// //     )
// //   }
// // }


// class Message extends React.Component {
//   render (){
//     console.log(this.props);
//       return (
//         <div>
//           <h1 style={{color: this.props.color}}>
//             {this.props.msg}
//           </h1>
//           <p>I'll check back in {this.props.minutes} minutes</p>
//         </div>
//       )
//   }
// }


class FavoriteColorForm extends React.Component {
  state = {value:''}

  newColor = e => this.setState({value : e.target.value})

  submit = e => {
    console.log(`New Color: ${this.state.value}`)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Favorite Color:
          <input type="color" onChange={this.newColor}></input>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookMark: PropTypes.bool
}

render(
    // <Message msg="how are you?" color="blue" minutes={5}/>,
    // <SkiDayCounter
    //       total={skiData.total}
    //       powder={skiData.powder}
    //       backcountry={skiData.backcountry}
    //       goal={skiData.goal}
    //       />,
      <Library books={bookList} />,
      // <FavoriteColorForm  />,
    document.getElementById('root')
)