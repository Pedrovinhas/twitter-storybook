import { colors } from './colors'

export function ColorsGrid() {
   
        return Object.entries(colors).map(([key, color]) => {

            return (
                <div className='flex gap-4 items-center'>
                    <div key={key} style={{width: '300px', backgroundColor: color, padding: '1rem'}}>  </div>
                        <div style={{
                            display: 'flex',
                            color: color
                        }}>
                            <strong className='text-white mr-6'> ${key} </strong>
                    
                            <span className='text-white'> {color} </span>
                        </div>
                </div>
            )
        })
    
}