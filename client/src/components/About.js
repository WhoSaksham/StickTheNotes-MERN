import React from 'react'

function About() {
    return (
        <>
            <div className="container mt-5">
                <div className="card text-center" id='about'>
                    <div className="card-header" style={{ fontSize: '22px', fontWeight: '550' }}>
                        About
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: '27px' }}>StickTheNotes</h5>
                        <p className="card-text mt-3 container text-center" style={{ fontSize: '23px', fontFamily: 'Quicksand' }}>
                            StickTheNotes is a web-app based platform where you can create and manage your very own notes on the cloud. It is secure, reliable, and completely free to use platform. You can create as many notes you want. Your privacy will be maintained. Only you can access and manage your notes and no one else. So don't forget to make StickTheNotes your everyday-use app. </p>
                    </div>
                </div>
                <p className='text-center my-3' style={{ fontSize: '20px' }}>Made with <span style={{ color: 'red' }}>❤</span> by <a href="https://github.com/WhoSaksham" target='_blank' style={{ curser: 'pointer', color: '#222' }}>Saksham</a></p>
            </div>
        </>
    )
}

export default About
