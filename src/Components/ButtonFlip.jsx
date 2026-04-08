import React from 'react'
import {motion} from 'framer-motion'

const ButtonFlip = (visibility) => {
  
  return (
    <div>
      <motion.button
            initial="rest"
            whileHover="hover"
            className={`bg-black text-white px-4 py-2 rounded-full overflow-hidden
            font-bold hidden xl:inline-block sm:text-sm lg:text-lg`}
          >
            <div className="relative h-[1.2em] overflow-hidden leading-none">
              {/* Top text */}
              <motion.span
                variants={{
                  rest: { y: 0 },
                  hover: { y: "-100%" },
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="block"
              >
                Try Dreelio free
              </motion.span>

              {/* Bottom text */}
              <motion.span
                variants={{
                  rest: { y: "100%" },
                  hover: { y: 0 },
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="absolute inset-0 block"
              >
                Try Dreelio free
              </motion.span>
            </div>
          </motion.button>
    </div>
  )
}

export default ButtonFlip
