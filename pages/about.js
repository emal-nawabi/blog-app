export default function about() {
  return (
    <div>
      <h1>About</h1>
      <form id='contact-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input type='email' className='form-control' aria-describedby='emailHelp' />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea className='form-control' rows='5'></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>

      <h2>about page is aasdlfaksdhfglasdjfga;dfsldfjhgkl;fd</h2>
      <img src='/' alt='sldfkgjlksdfglkdsl' />

      <p>adslkfghsldkgnlkajdkfhglkskdflgshl;dskafkfgjkshdflkgkds</p>
      <h3>alkdjglkfasdjfglkdg</h3>
      <h4>kjsadhljfahldfjald</h4>
      <h5>a;lkdjf;asdjgl;kjg;fs;d</h5>
      <h6>hi from h6 or we can say heading 6</h6>
    </div>
  )
}
