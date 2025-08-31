import React from 'react';
export default function Footer(){
  return (
    <div className="footer">
      <div className="container">
        <div className="grid cols-3">
          <div>
            <strong>ArtistHub</strong>
            <p className="small muted">Music, community, events, and impact—together.</p>
          </div>
          <div>
            <strong>Resources</strong>
            <ul>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <strong>Legal</strong>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">DMCA</a></li>
            </ul>
          </div>
        </div>
        <div className="space"></div>
        <small className="muted">© {new Date().getFullYear()} ArtistHub.</small>
      </div>
    </div>
  )
}
