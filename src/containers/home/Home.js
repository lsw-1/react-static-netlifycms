import React from 'react'
import { withSiteData } from 'react-static'
import anime from 'animejs'
import './Home.css'

const Home = class extends React.Component {
  componentDidMount () {
    anime({
      targets: '#lineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 2000,
      delay (el, i) {
        return i * 150
      },
    })
    anime({
      targets: '.line-1',
      width: '80%',
      easing: 'linear',
      duration: 2000,
    })
    anime({
      targets: '.line-2',
      width: '60%',
      easing: 'linear',
      duration: 2000,
    })
    anime({
      targets: '.line-3',
      width: '40%',
      easing: 'linear',
      duration: 2000,
    })
  }
  render () {
    return (
      <div className="container">
        <div id="lineDrawing">
          <svg viewBox="0 0 1500 100">
            <g
              transform="translate(600 114)"
              fill="none"
              fillRule="evenodd"
              stroke="#828282"
              strokeWidth="2"
              className="lines"
            >
              <path
                id="path0_fill"
                transform="translate(-520 -133)"
                d="M 6.912 87L 6.912 22.392C 6.912 21.368 7.072 20.696 7.392 20.376C 7.776 19.992 8.48 19.8 9.504 19.8L 14.592 19.8L 14.592 81.432L 34.848 81.432L 34.848 84.408C 34.848 85.432 34.656 86.136 34.272 86.52C 33.952 86.84 33.28 87 32.256 87L 6.912 87Z"
              />
              <path
                id="path1_fill"
                transform="translate(-483 -133)"
                d="M 30.144 87L 30.144 40.824C 30.144 39.8 30.304 39.128 30.624 38.808C 31.008 38.424 31.712 38.232 32.736 38.232L 37.824 38.232L 37.824 84.408C 37.824 85.432 37.632 86.136 37.248 86.52C 36.928 86.84 36.256 87 35.232 87L 30.144 87ZM 6.144 40.824C 6.144 39.8 6.304 39.128 6.624 38.808C 7.008 38.424 7.712 38.232 8.736 38.232L 13.824 38.232L 13.824 75.96C 13.824 77.944 14.08 79.352 14.592 80.184C 15.104 81.016 16.352 81.432 18.336 81.432L 26.304 81.432L 26.304 84.408C 26.304 85.432 26.144 86.136 25.824 86.52C 25.568 86.84 24.928 87 23.904 87L 15.264 87C 11.936 87 9.568 86.328 8.16 84.984C 6.816 83.576 6.144 81.208 6.144 77.88L 6.144 40.824Z"
              />
              <path
                id="path2_fill"
                transform="translate(-438 -133)"
                d="M 37.728 19.8L 37.728 84.408C 37.728 85.432 37.536 86.136 37.152 86.52C 36.832 86.84 36.16 87 35.136 87L 30.048 87L 30.048 22.392C 30.048 21.368 30.208 20.696 30.528 20.376C 30.912 19.992 31.616 19.8 32.64 19.8L 37.728 19.8ZM 15.168 87C 11.84 87 9.472 86.328 8.064 84.984C 6.72 83.576 6.048 81.208 6.048 77.88L 6.048 47.352C 6.048 44.024 6.72 41.688 8.064 40.344C 9.472 38.936 11.84 38.232 15.168 38.232L 24.288 38.232C 26.144 38.232 27.456 38.712 28.224 39.672C 29.056 40.568 29.664 41.944 30.048 43.8L 18.24 43.8C 16.256 43.8 15.008 44.216 14.496 45.048C 13.984 45.88 13.728 47.288 13.728 49.272L 13.728 75.96C 13.728 77.944 13.984 79.352 14.496 80.184C 15.008 81.016 16.256 81.432 18.24 81.432L 26.208 81.432L 26.208 84.408C 26.208 85.432 26.048 86.136 25.728 86.52C 25.472 86.84 24.832 87 23.808 87L 15.168 87Z"
              />
              <path
                id="path3_fill"
                transform="translate(-389 -133)"
                d="M 46.08 84.6C 45.952 85.368 45.728 85.976 45.408 86.424C 45.088 86.808 44.512 87 43.68 87L 36.576 87L 31.584 67.032L 28.8 54.744L 28.224 54.744L 25.344 67.032L 20.736 84.504C 20.416 85.464 20.032 86.136 19.584 86.52C 19.136 86.84 18.528 87 17.76 87L 11.04 87L 2.88 40.152C 2.688 38.872 3.168 38.232 4.32 38.232L 9.6 38.232L 16.032 80.472L 16.704 80.472L 24.384 51.48C 24.704 50.392 25.408 49.816 26.496 49.752L 32.832 49.752L 40.416 80.472L 40.8 80.472L 46.848 40.152C 46.976 39.384 47.2 38.872 47.52 38.616C 47.904 38.36 48.48 38.232 49.248 38.232L 53.76 38.232L 46.08 84.6Z"
              />
              <path
                id="path4_fill"
                transform="translate(-333 -132)"
                d="M 5.856 27.96C 5.856 26.936 6.016 26.264 6.336 25.944C 6.72 25.56 7.424 25.368 8.448 25.368L 14.304 25.368L 14.304 30.456C 14.304 31.48 14.112 32.184 13.728 32.568C 13.408 32.888 12.736 33.048 11.712 33.048L 5.856 33.048L 5.856 27.96ZM 13.92 38.232L 13.92 84.408C 13.92 85.432 13.728 86.136 13.344 86.52C 13.024 86.84 12.352 87 11.328 87L 6.24 87L 6.24 40.824C 6.24 39.8 6.4 39.128 6.72 38.808C 7.104 38.424 7.808 38.232 8.832 38.232L 13.92 38.232Z"
              />
              <path
                id="path5_fill"
                transform="translate(-310 -133)"
                d="M 15.168 87C 11.84 87 9.472 86.328 8.064 84.984C 6.72 83.576 6.048 81.208 6.048 77.88L 6.048 47.352C 6.048 44.024 6.72 41.688 8.064 40.344C 9.472 38.936 11.84 38.232 15.168 38.232L 24.288 38.232C 26.144 38.232 27.456 38.712 28.224 39.672C 29.056 40.568 29.664 41.944 30.048 43.8L 18.24 43.8C 16.256 43.8 15.008 44.216 14.496 45.048C 13.984 45.88 13.728 47.288 13.728 49.272L 13.728 75.96C 13.728 77.944 13.984 79.352 14.496 80.184C 15.008 81.016 16.256 81.432 18.24 81.432L 26.208 81.432L 26.208 84.408C 26.208 85.432 26.048 86.136 25.728 86.52C 25.472 86.84 24.832 87 23.808 87L 15.168 87ZM 8.448 106.296C 7.424 106.296 6.752 106.104 6.432 105.72C 6.176 105.4 6.048 104.728 6.048 103.704L 6.048 100.728L 25.536 100.728C 26.496 100.728 27.264 100.664 27.84 100.536C 28.48 100.408 28.96 100.152 29.28 99.768C 29.6 99.384 29.792 98.84 29.856 98.136C 29.984 97.432 30.048 96.472 30.048 95.256L 30.048 40.824C 30.048 39.8 30.208 39.128 30.528 38.808C 30.912 38.424 31.616 38.232 32.64 38.232L 37.728 38.232L 37.728 97.176C 37.728 100.504 37.024 102.84 35.616 104.184C 34.272 105.592 31.936 106.296 28.608 106.296L 8.448 106.296Z"
              />
              <path
                id="path0_fill"
                transform="translate(-255 -127)"
                d="M 32.256 77.88C 32.256 81.208 31.552 83.576 30.144 84.984C 28.8 86.328 26.464 87 23.136 87L 11.424 87C 9.568 87 8.224 86.552 7.392 85.656C 6.624 84.696 6.048 83.288 5.664 81.432L 20.064 81.432C 22.048 81.432 23.296 81.016 23.808 80.184C 24.32 79.352 24.576 77.944 24.576 75.96L 24.576 60.408C 24.576 58.424 24.288 57.016 23.712 56.184C 23.2 55.352 21.856 54.936 19.68 54.936L 14.784 54.936C 11.456 54.936 9.088 54.264 7.68 52.92C 6.336 51.512 5.664 49.144 5.664 45.816L 5.664 28.92C 5.664 25.592 6.336 23.256 7.68 21.912C 9.088 20.504 11.456 19.8 14.784 19.8L 26.208 19.8C 28.064 19.8 29.376 20.28 30.144 21.24C 30.976 22.136 31.584 23.512 31.968 25.368L 17.856 25.368C 15.872 25.368 14.624 25.784 14.112 26.616C 13.6 27.448 13.344 28.856 13.344 30.84L 13.344 43.896C 13.344 45.88 13.6 47.288 14.112 48.12C 14.624 48.952 15.872 49.368 17.856 49.368L 23.136 49.368C 26.464 49.368 28.8 50.072 30.144 51.48C 31.552 52.824 32.256 55.16 32.256 58.488L 32.256 77.88Z"
              />
              <path
                id="path1_fill"
                transform="translate(-216 -127)"
                d="M 23.424 38.232C 24.448 38.232 25.088 38.424 25.344 38.808C 25.664 39.128 25.824 39.8 25.824 40.824L 25.824 43.8L 14.016 43.8L 14.016 75.96C 14.016 77.944 14.272 79.352 14.784 80.184C 15.296 81.016 16.544 81.432 18.528 81.432L 26.88 81.432C 26.752 83.288 26.368 84.696 25.728 85.656C 25.152 86.552 23.936 87 22.08 87L 15.456 87C 12.128 87 9.76 86.328 8.352 84.984C 7.008 83.576 6.336 81.208 6.336 77.88L 6.336 29.688C 6.336 28.664 6.496 27.992 6.816 27.672C 7.2 27.288 7.904 27.096 8.928 27.096L 14.016 27.096L 14.016 38.232L 23.424 38.232Z"
              />
              <path
                id="path2_fill"
                transform="translate(-186 -127)"
                d="M 13.92 43.8L 13.92 84.408C 13.92 85.432 13.728 86.136 13.344 86.52C 13.024 86.84 12.352 87 11.328 87L 6.24 87L 6.24 40.824C 6.24 39.8 6.4 39.128 6.72 38.808C 7.104 38.424 7.808 38.232 8.832 38.232L 13.92 38.232L 13.92 43.8C 14.752 41.624 15.616 40.152 16.512 39.384C 17.408 38.616 18.784 38.232 20.64 38.232L 24.384 38.232C 25.408 38.232 26.048 38.424 26.304 38.808C 26.624 39.128 26.784 39.8 26.784 40.824L 26.784 43.8L 13.92 43.8Z"
              />
              <path
                id="path3_fill"
                transform="translate(-159 -127)"
                d="M 27.936 49.272C 27.936 47.288 27.68 45.88 27.168 45.048C 26.656 44.216 25.408 43.8 23.424 43.8L 6.816 43.8C 7.2 41.944 7.776 40.568 8.544 39.672C 9.376 38.712 10.72 38.232 12.576 38.232L 26.496 38.232C 29.824 38.232 32.16 38.936 33.504 40.344C 34.912 41.688 35.616 44.024 35.616 47.352L 35.616 87L 30.528 87C 29.504 87 28.8 86.84 28.416 86.52C 28.096 86.136 27.936 85.432 27.936 84.408L 27.936 49.272ZM 14.016 87C 10.688 87 8.32 86.328 6.912 84.984C 5.568 83.576 4.896 81.208 4.896 77.88L 4.896 67.32C 4.896 63.992 5.568 61.656 6.912 60.312C 8.32 58.904 10.688 58.2 14.016 58.2L 22.176 58.2C 24.032 58.2 25.344 58.68 26.112 59.64C 26.944 60.536 27.552 61.912 27.936 63.768L 17.088 63.768C 15.104 63.768 13.856 64.184 13.344 65.016C 12.832 65.848 12.576 67.256 12.576 69.24L 12.576 76.728C 12.576 78.712 12.928 79.992 13.632 80.568C 14.4 81.144 15.776 81.432 17.76 81.432L 24.096 81.432L 24.096 84.408C 24.096 85.432 23.936 86.136 23.616 86.52C 23.36 86.84 22.72 87 21.696 87L 14.016 87ZM 21.12 32.76C 18.688 32.76 16.96 32.376 15.936 31.608C 14.976 30.776 14.496 29.176 14.496 26.808L 14.496 23.064C 14.496 20.696 14.976 19.128 15.936 18.36C 16.96 17.528 18.688 17.112 21.12 17.112L 24.096 17.112C 26.528 17.112 28.224 17.528 29.184 18.36C 30.208 19.128 30.72 20.696 30.72 23.064L 30.72 26.808C 30.72 29.176 30.208 30.776 29.184 31.608C 28.224 32.376 26.528 32.76 24.096 32.76L 21.12 32.76ZM 19.104 25.368C 19.104 26.328 19.136 27.064 19.2 27.576C 19.264 28.088 19.424 28.472 19.68 28.728C 19.936 28.984 20.288 29.144 20.736 29.208C 21.248 29.272 21.888 29.304 22.656 29.304C 24.192 29.304 25.152 29.112 25.536 28.728C 25.92 28.344 26.112 27.224 26.112 25.368L 26.112 24.504C 26.112 23.544 26.08 22.808 26.016 22.296C 25.952 21.784 25.792 21.4 25.536 21.144C 25.28 20.888 24.896 20.728 24.384 20.664C 23.936 20.6 23.328 20.568 22.56 20.568C 21.024 20.568 20.064 20.76 19.68 21.144C 19.296 21.528 19.104 22.648 19.104 24.504L 19.104 25.368Z"
              />
              <path
                id="path4_fill"
                transform="translate(-116 -127)"
                d="M 14.496 19.8L 14.496 84.408C 14.496 85.432 14.304 86.136 13.92 86.52C 13.6 86.84 12.928 87 11.904 87L 6.816 87L 6.816 22.392C 6.816 21.368 6.976 20.696 7.296 20.376C 7.68 19.992 8.384 19.8 9.408 19.8L 14.496 19.8Z"
              />
              <path
                id="path5_fill"
                transform="translate(-94 -127)"
                d="M 32.064 81.432L 32.064 84.408C 32.064 85.432 31.904 86.136 31.584 86.52C 31.328 86.84 30.688 87 29.664 87L 15.168 87C 11.84 87 9.472 86.328 8.064 84.984C 6.72 83.576 6.048 81.208 6.048 77.88L 6.048 47.352C 6.048 44.024 6.72 41.688 8.064 40.344C 9.472 38.936 11.84 38.232 15.168 38.232L 25.728 38.232C 29.056 38.232 31.392 38.936 32.736 40.344C 34.144 41.688 34.848 44.024 34.848 47.352L 34.848 58.104C 34.848 61.432 34.144 63.8 32.736 65.208C 31.392 66.552 29.056 67.224 25.728 67.224L 19.968 67.224C 18.944 67.224 18.272 67.064 17.952 66.744C 17.696 66.36 17.568 65.656 17.568 64.632L 17.568 61.656L 23.136 61.656C 25.12 61.656 26.368 61.24 26.88 60.408C 27.392 59.576 27.648 58.168 27.648 56.184L 27.648 48.792C 27.648 46.808 27.328 45.496 26.688 44.856C 26.048 44.152 24.736 43.8 22.752 43.8L 18.624 43.8C 16.512 43.8 15.168 44.184 14.592 44.952C 14.016 45.656 13.728 47.096 13.728 49.272L 13.728 75.96C 13.728 77.944 13.984 79.352 14.496 80.184C 15.008 81.016 16.256 81.432 18.24 81.432L 32.064 81.432Z"
              />
              <path
                id="path6_fill"
                transform="translate(-35 -127)"
                d="M 36.288 56.952L 34.656 47.448L 34.08 47.448L 32.544 56.952L 24.96 84.408C 24.704 85.432 24.352 86.136 23.904 86.52C 23.52 86.84 22.816 87 21.792 87L 15.36 87L 3.648 22.392C 3.264 20.664 3.904 19.8 5.568 19.8L 10.752 19.8L 18.816 66.648L 20.736 78.168L 21.312 78.168L 23.616 66.648L 31.104 39.192C 31.232 38.872 31.456 38.552 31.776 38.232C 32.16 37.912 32.608 37.752 33.12 37.752L 38.304 37.752L 45.12 66.648L 47.52 78.168L 48.096 78.168L 49.92 66.648L 57.216 22.392C 57.408 21.368 57.728 20.696 58.176 20.376C 58.688 19.992 59.456 19.8 60.48 19.8L 65.184 19.8L 53.664 84.408C 53.408 85.432 53.056 86.136 52.608 86.52C 52.224 86.904 51.52 87.096 50.496 87.096L 43.68 87.096L 36.288 56.952Z"
              />
              <path
                id="path7_fill"
                transform="translate(32 -127)"
                d="M 5.856 27.96C 5.856 26.936 6.016 26.264 6.336 25.944C 6.72 25.56 7.424 25.368 8.448 25.368L 14.304 25.368L 14.304 30.456C 14.304 31.48 14.112 32.184 13.728 32.568C 13.408 32.888 12.736 33.048 11.712 33.048L 5.856 33.048L 5.856 27.96ZM 13.92 38.232L 13.92 84.408C 13.92 85.432 13.728 86.136 13.344 86.52C 13.024 86.84 12.352 87 11.328 87L 6.24 87L 6.24 40.824C 6.24 39.8 6.4 39.128 6.72 38.808C 7.104 38.424 7.808 38.232 8.832 38.232L 13.92 38.232Z"
              />
              <path
                transform="translate(54 -127)"
                id="path2_fill"
                d="M 13.92 43.8L 13.92 84.408C 13.92 85.432 13.728 86.136 13.344 86.52C 13.024 86.84 12.352 87 11.328 87L 6.24 87L 6.24 40.824C 6.24 39.8 6.4 39.128 6.72 38.808C 7.104 38.424 7.808 38.232 8.832 38.232L 13.92 38.232L 13.92 43.8C 14.752 41.624 15.616 40.152 16.512 39.384C 17.408 38.616 18.784 38.232 20.64 38.232L 24.384 38.232C 25.408 38.232 26.048 38.424 26.304 38.808C 26.624 39.128 26.784 39.8 26.784 40.824L 26.784 43.8L 13.92 43.8Z"
              />

              <path
                id="path8_fill"
                transform="translate(84 -127)"
                d="M 32.064 81.432L 32.064 84.408C 32.064 85.432 31.904 86.136 31.584 86.52C 31.328 86.84 30.688 87 29.664 87L 15.168 87C 11.84 87 9.472 86.328 8.064 84.984C 6.72 83.576 6.048 81.208 6.048 77.88L 6.048 47.352C 6.048 44.024 6.72 41.688 8.064 40.344C 9.472 38.936 11.84 38.232 15.168 38.232L 25.728 38.232C 29.056 38.232 31.392 38.936 32.736 40.344C 34.144 41.688 34.848 44.024 34.848 47.352L 34.848 58.104C 34.848 61.432 34.144 63.8 32.736 65.208C 31.392 66.552 29.056 67.224 25.728 67.224L 19.968 67.224C 18.944 67.224 18.272 67.064 17.952 66.744C 17.696 66.36 17.568 65.656 17.568 64.632L 17.568 61.656L 23.136 61.656C 25.12 61.656 26.368 61.24 26.88 60.408C 27.392 59.576 27.648 58.168 27.648 56.184L 27.648 48.792C 27.648 46.808 27.328 45.496 26.688 44.856C 26.048 44.152 24.736 43.8 22.752 43.8L 18.624 43.8C 16.512 43.8 15.168 44.184 14.592 44.952C 14.016 45.656 13.728 47.096 13.728 49.272L 13.728 75.96C 13.728 77.944 13.984 79.352 14.496 80.184C 15.008 81.016 16.256 81.432 18.24 81.432L 32.064 81.432ZM 23.712 33.336L 21.216 33.336C 20.064 33.336 19.456 33.048 19.392 32.472C 19.392 31.832 19.488 31.352 19.68 31.032L 25.152 19.8L 30.24 19.8C 31.2 19.8 31.84 19.96 32.16 20.28C 32.48 20.6 32.64 21.208 32.64 22.104L 23.712 33.336Z"
              />
              <path
                id="path9_fill"
                transform="translate(119 -127)"
                d="M 28.8 38.232C 32.128 38.232 34.464 38.936 35.808 40.344C 37.216 41.688 37.92 44.024 37.92 47.352L 37.92 84.408C 37.92 85.432 37.728 86.136 37.344 86.52C 37.024 86.84 36.352 87 35.328 87L 30.24 87L 30.24 49.272C 30.24 47.288 29.984 45.88 29.472 45.048C 28.96 44.216 27.712 43.8 25.728 43.8L 13.92 43.8L 13.92 84.408C 13.92 85.432 13.728 86.136 13.344 86.52C 13.024 86.84 12.352 87 11.328 87L 6.24 87L 6.24 40.824C 6.24 39.8 6.4 39.128 6.72 38.808C 7.104 38.424 7.808 38.232 8.832 38.232L 13.92 38.232L 13.92 43.8C 14.304 41.944 14.88 40.568 15.648 39.672C 16.48 38.712 17.824 38.232 19.68 38.232L 28.8 38.232Z"
              />
            </g>
          </svg>
        </div>
        <div>
          <div className="line-1" />
          <div className="line-2" />
          <div className="line-3" />
        </div>
      </div>
    )
  }
}
export default withSiteData(Home)
