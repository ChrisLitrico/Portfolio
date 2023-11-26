import './index.scss'
import LogoC from '../../../assets/img/logo-c.png'
import { useRef } from 'react'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import { useEffect } from 'react'
import { gsap } from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .from(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 7,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoC} alt="C" />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="596px"
        height="842px"
        viewBox="0 0 596.000000 842.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,842.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M1710 7364 c-239 -87 -435 -165 -447 -177 -22 -20 -23 -26 -23 -223
0 -183 -2 -203 -17 -209 -10 -4 -189 -67 -398 -142 -282 -100 -386 -141 -402
-159 l-23 -25 0 -1594 c0 -1508 1 -1595 17 -1606 10 -6 198 -79 418 -163 l400
-152 5 -515 c3 -317 9 -520 15 -529 6 -9 583 -231 1283 -494 l1274 -478 425
156 c314 114 434 162 454 182 l29 27 2 200 3 200 393 142 c248 90 402 151 418
166 l24 22 0 541 c0 298 -4 546 -8 552 -7 12 -869 344 -891 344 -6 0 -199 -68
-429 -151 -335 -122 -422 -157 -444 -180 l-28 -29 0 -171 c0 -158 -1 -171 -17
-167 -14 4 -1433 531 -1515 563 -17 7 -18 73 -18 1201 0 683 4 1194 9 1194 5
0 341 -123 747 -274 l739 -274 3 -531 2 -531 23 -14 c31 -21 850 -336 871
-336 10 0 205 68 435 151 302 110 422 158 439 176 l22 24 0 544 c0 299 -3 550
-6 558 -3 9 -161 73 -390 159 l-384 143 0 521 c0 483 -1 522 -17 537 -17 14
-2507 966 -2548 973 -11 2 -211 -66 -445 -152z m1699 -354 c694 -264 1266
-482 1271 -485 6 -4 10 -209 10 -534 l0 -527 388 -145 387 -144 2 -540 c2
-415 0 -544 -10 -556 -9 -13 -762 -296 -839 -317 -17 -4 -848 310 -875 331
-10 7 -13 128 -13 541 l0 531 -766 284 c-484 180 -769 280 -775 274 -6 -6 -8
-466 -7 -1227 l3 -1218 790 -294 c435 -162 796 -294 803 -294 9 0 12 43 12
183 0 157 3 185 18 203 12 15 146 69 435 174 l419 152 431 -165 432 -165 3
-529 2 -529 -23 -22 c-13 -13 -185 -80 -417 -165 l-395 -143 -3 -205 c-2 -199
-3 -207 -25 -226 -12 -11 -209 -88 -439 -171 l-416 -151 -1264 474 c-729 274
-1268 482 -1275 492 -10 13 -13 135 -13 528 l0 512 -402 153 c-222 84 -409
157 -415 163 -18 14 -19 3148 -1 3176 8 13 139 64 415 163 l403 143 0 201 0
201 26 24 c17 16 164 75 437 176 227 83 415 152 418 152 3 1 574 -215 1268
-479z"
          />
          <path
            d="M1780 7302 l-345 -128 0 -29 0 -30 356 -128 356 -128 339 131 c186
73 347 140 357 149 17 17 2 24 -333 151 -194 73 -359 134 -368 136 -10 2 -172
-54 -362 -124z m754 -54 c148 -56 265 -103 260 -105 -5 -2 -153 -59 -328 -127
l-320 -125 -339 122 c-186 68 -338 127 -337 132 0 6 150 65 333 132 l331 121
66 -24 c36 -14 186 -70 334 -126z"
          />
          <path
            d="M2620 6981 c-316 -117 -345 -130 -348 -152 -2 -23 13 -29 356 -152
l358 -128 346 135 c190 74 357 136 371 138 17 2 -100 50 -346 142 -205 77
-376 141 -382 142 -5 1 -165 -55 -355 -125z m990 -150 c0 -3 -141 -61 -313
-128 l-313 -122 -337 122 c-185 67 -337 124 -337 127 0 3 149 59 332 126 l331
121 318 -120 c176 -66 319 -122 319 -126z"
          />
          <path
            d="M1340 6599 l0 -494 369 -137 c202 -76 375 -138 384 -138 16 0 17 40
17 489 l0 488 -367 136 c-203 74 -376 139 -385 142 -17 7 -18 -20 -18 -486z
m442 297 l303 -112 3 -463 c2 -438 1 -462 -15 -457 -10 4 -171 64 -358 134
l-340 128 -3 462 -2 461 54 -20 c30 -12 191 -72 358 -133z"
          />
          <path
            d="M3460 6671 c-341 -126 -345 -128 -348 -157 l-3 -29 361 -128 c198
-71 366 -127 374 -125 7 2 164 59 350 128 l337 125 -3 29 c-3 28 -9 30 -344
151 -188 68 -350 125 -360 128 -11 3 -174 -52 -364 -122z m943 -118 c54 -20
95 -39 90 -44 -4 -4 -154 -62 -333 -129 l-325 -121 -347 123 c-192 68 -347
127 -345 132 2 5 153 64 336 131 l333 122 247 -89 c135 -49 290 -105 344 -125z"
          />
          <path
            d="M2180 6288 l0 -493 370 -139 c203 -76 376 -136 385 -132 13 5 15 65
15 483 l0 478 -376 145 c-207 80 -381 147 -385 148 -5 2 -9 -214 -9 -490z
m748 -283 c2 -364 0 -456 -10 -453 -7 3 -169 63 -360 134 l-348 129 0 461 0
461 358 -137 357 -138 3 -457z"
          />
          <path
            d="M913 6553 c-431 -155 -431 -132 5 -287 180 -64 330 -116 335 -116 4
0 7 117 7 260 0 202 -3 260 -12 259 -7 0 -158 -53 -335 -116z m327 -147 l0
-223 -310 111 c-171 60 -310 113 -310 116 0 6 588 218 608 219 9 1 12 -50 12
-223z"
          />
          <path
            d="M3020 5966 l0 -493 368 -132 c202 -72 375 -131 385 -131 16 0 17 30
17 483 l0 482 -312 115 c-172 63 -345 127 -385 142 l-73 27 0 -493z m450 294
l285 -105 3 -458 c1 -251 1 -457 0 -457 -2 0 -163 58 -358 128 l-355 128 -3
462 -2 461 72 -27 c40 -15 201 -74 358 -132z"
          />
          <path
            d="M500 5861 l0 -489 28 -10 c74 -26 709 -255 720 -259 10 -4 12 94 10
483 l-3 488 -365 138 c-201 75 -371 137 -377 138 -10 0 -13 -104 -13 -489z
m390 318 l350 -131 0 -455 c0 -360 -3 -454 -12 -451 -7 3 -167 60 -355 128
l-343 123 0 458 c0 253 2 459 5 459 3 0 162 -59 355 -131z"
          />
          <path
            d="M4237 5302 c-319 -120 -337 -128 -335 -151 3 -21 34 -35 348 -148
190 -68 354 -125 365 -125 11 0 173 57 360 125 307 113 340 128 343 149 3 22
-16 30 -360 151 -200 70 -367 127 -373 126 -5 0 -162 -58 -348 -127z m700 -24
c189 -67 340 -125 336 -129 -10 -9 -644 -242 -658 -242 -15 0 -659 234 -668
242 -5 6 611 246 642 250 2 1 159 -54 348 -121z"
          />
          <path
            d="M500 4819 l0 -494 318 -118 c174 -66 345 -129 380 -142 l62 -24 0
487 0 488 -362 141 c-200 78 -371 145 -380 148 -17 7 -18 -20 -18 -486z m385
311 c187 -73 343 -136 348 -139 4 -4 6 -210 5 -458 l-3 -450 -350 131 -350
132 -3 462 c-1 255 1 461 5 459 5 -3 161 -64 348 -137z"
          />
          <path
            d="M3802 4603 l3 -486 370 -139 c203 -76 375 -136 382 -134 10 4 13 103
13 486 0 264 -1 480 -3 480 -2 0 -173 63 -382 140 -208 77 -380 140 -382 140
-2 0 -2 -219 -1 -487z m446 292 l292 -108 0 -453 c0 -250 -4 -454 -8 -454 -5
0 -164 58 -353 129 l-344 129 -3 456 -2 455 62 -23 c35 -13 195 -72 356 -131z"
          />
          <path
            d="M500 3767 c0 -452 1 -485 18 -492 70 -27 733 -275 737 -275 3 0 4
219 3 487 l-3 486 -355 134 c-195 73 -365 136 -377 139 l-23 6 0 -485z m398
308 l342 -129 0 -453 c0 -249 -2 -453 -5 -453 -3 0 -162 59 -355 131 l-350
131 0 455 c0 360 3 454 13 450 6 -2 166 -62 355 -132z"
          />
          <path
            d="M4292 3212 l-343 -127 3 -30 3 -30 359 -127 359 -128 343 128 344
127 0 31 0 31 -352 127 c-194 69 -357 126 -363 125 -5 0 -164 -57 -353 -127z
m681 -18 c177 -64 333 -121 347 -126 20 -8 22 -11 10 -18 -33 -18 -646 -243
-660 -242 -17 1 -690 239 -698 247 -3 2 1 7 9 10 70 26 665 244 667 245 1 0
147 -52 325 -116z"
          />
          <path
            d="M1825 3114 c-170 -62 -329 -121 -352 -130 -33 -12 -43 -21 -43 -37 0
-20 36 -35 347 -147 191 -69 354 -126 363 -128 22 -4 682 256 703 277 17 17 6
22 -250 114 -147 53 -311 111 -363 130 l-95 35 -310 -114z m953 -151 c18 -7
-36 -32 -305 -136 l-327 -128 -338 122 c-186 67 -336 125 -332 128 3 3 152 60
332 126 l327 120 310 -112 c171 -61 320 -115 333 -120z"
          />
          <path
            d="M3860 2509 l0 -494 371 -138 c204 -76 377 -136 385 -133 12 5 14 78
14 489 l0 484 -367 136 c-203 74 -376 139 -385 142 -17 7 -18 -20 -18 -486z
m398 313 l342 -126 0 -463 0 -463 -27 11 c-16 6 -170 64 -343 129 -173 65
-323 121 -332 125 -17 7 -18 38 -18 467 0 434 1 460 18 453 9 -3 171 -63 360
-133z"
          />
          <path
            d="M2624 2790 c-315 -116 -349 -130 -352 -152 -3 -22 16 -30 351 -150
195 -71 357 -128 362 -128 4 0 160 57 346 126 301 112 373 144 357 159 -3 3
-277 108 -649 248 l-65 25 -350 -128z m690 -33 l327 -124 -328 -122 -328 -122
-342 123 c-187 68 -340 124 -338 126 7 8 652 241 666 242 10 0 164 -55 343
-123z"
          />
          <path
            d="M1340 2407 l0 -493 377 -142 c207 -77 380 -139 385 -136 4 3 8 222 8
487 l0 482 -338 129 c-185 72 -358 138 -384 148 l-48 18 0 -493z m280 353
c129 -50 288 -111 353 -136 l117 -46 0 -454 c0 -250 -3 -454 -7 -454 -3 0
-165 60 -360 132 l-353 133 0 457 c0 252 3 458 8 458 4 0 113 -41 242 -90z"
          />
          <path
            d="M3430 2465 c-312 -112 -315 -113 -318 -142 l-3 -30 331 -118 c214
-76 334 -115 341 -108 6 6 8 107 7 259 -3 241 -4 249 -23 251 -11 1 -162 -49
-335 -112z m330 -144 l0 -228 -307 110 c-170 60 -310 111 -312 113 -2 2 -2 7
1 10 5 4 601 221 616 224 1 0 2 -103 2 -229z"
          />
          <path
            d="M2180 2081 c0 -270 1 -491 3 -491 2 0 172 -61 377 -134 205 -74 377
-133 382 -130 4 3 8 222 8 487 l0 482 -363 133 c-199 73 -372 135 -384 139
l-23 5 0 -491z m380 324 c186 -69 346 -128 355 -131 13 -5 15 -60 15 -460 0
-250 -3 -454 -7 -454 -4 0 -166 57 -360 127 l-353 126 0 459 c0 252 2 458 5
458 3 0 158 -56 345 -125z"
          />
          <path
            d="M3020 1771 c0 -456 1 -489 18 -496 254 -100 737 -274 744 -267 4 4 7
226 6 492 l-3 485 -370 137 c-203 75 -376 137 -382 137 -10 1 -13 -103 -13
-488z m738 -271 c2 -368 0 -461 -10 -458 -7 3 -169 63 -360 134 l-348 129 0
461 0 461 358 -132 357 -132 3 -463z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
