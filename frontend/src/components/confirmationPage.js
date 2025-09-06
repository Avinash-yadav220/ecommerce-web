import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



export const PaymentConfirmation = () => {
    const navigate = useNavigate()
    useEffect(() => {
      setTimeout(()=>navigate('/'),3000)
    }, [navigate])

    return(
        <div style={{marginTop:"2rem",textAlign:'center'}}>
            <h2>Thank you for your payment</h2>
            <p>we're reconfirming your order</p>
        </div>
    )
}

