import React from 'react'


export const Showerror = ({}) => {

  return (
    <div>
        <div className='alert alert-danger alert-dismissible fade show' role='alert'>
            <strong>There's an error</strong>
            <button type="button" class="close" data-dismiss="alert"  aria-label="Close">&times;</button>


        </div>

    </div>
  )
}
export default Showerror;