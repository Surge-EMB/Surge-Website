import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 p-4 mt-8 text-slate-100">
        <div className="container mx-auto text-center">
            <b>Email:</b> surge@berkeley.edu | <b>Instagram:</b> <a className="underline hover:font-bold" href="https://www.instagram.com/surge.emb">@surge.emb</a> | <b>LinkedIn:</b> <a className="underline hover:font-bold" href="https://www.linkedin.com/company/surge-emb/about/">Surge-EMB</a>
        </div>
        <div className="flex justify-center md:justify-end md:my-0 my-4">
            <a href="https://www.ocf.berkeley.edu">
                <img src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg" alt="Hosted by the OCF"/>
            </a>
        </div>
        <div className="text-center">
            <p className="text-xs text-slate-400">We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.</p>
        </div>
    </footer>
  )
}

export default Footer