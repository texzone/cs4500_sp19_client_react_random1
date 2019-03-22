import React from 'react'

const FAQTable = (props) => {
  return (
    <div>
      <h3>Frequently Asked Questions</h3>
      <table className="table">
        <tr>
            <th>Title</th>
            <th>Question</th>
            <th></th>
        </tr>
        <tr>
            <th>
                <input
                    type="text"
                    id="titleInput"
                    placeholder="Title"
                    title="Type in a name">
                </input>
            </th>
            <th>
                <input
                    type="text"
                    id="questionInput"
                    placeholder="Question"
                    title="Type in a name">
                </input>
            </th>
            <th>
                <button>Add</button>
                <button>Save</button>
            </th>
        </tr>
        <tbody>
          {
           props.faqs.slice( ((props.pageNumber * props.itemsPerPage) - props.itemsPerPage), ((props.pageNumber * props.itemsPerPage) - 1))
               .map(faq =>
             <tr key={faq.id}>
               <td>{faq.title}</td>
               <td>{faq.question}</td>
               <td>
                    <button onClick={() => props.deleteFn(faq.id)}>Delete</button>
              </td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  )
}

export default FAQTable;
