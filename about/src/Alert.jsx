import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export default function Alert({
   type = "info",
   title,
   message,
   isDismissible = true,
}) {
   const [isVisible, setIsVisible] = useState(true);

   if (!isVisible) return null;

   // Alert styling configuration
   const alertStyles = {
      info: {
         container: "bg-blue-50 border-l-4 border-blue-400",
         icon: <Info className="h-5 w-5 text-blue-400" />,
         title: "text-blue-800",
         message: "text-blue-700",
         button: "text-blue-500 hover:bg-blue-100",
      },
      warning: {
         container: "bg-yellow-50 border-l-4 border-yellow-400",
         icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
         title: "text-yellow-800",
         message: "text-yellow-700",
         button: "text-yellow-500 hover:bg-yellow-100",
      },
      success: {
         container: "bg-green-50 border-l-4 border-green-400",
         icon: <CheckCircle className="h-5 w-5 text-green-400" />,
         title: "text-green-800",
         message: "text-green-700",
         button: "text-green-500 hover:bg-green-100",
      },
      error: {
         container: "bg-red-50 border-l-4 border-red-400",
         icon: <XCircle className="h-5 w-5 text-red-400" />,
         title: "text-red-800",
         message: "text-red-700",
         button: "text-red-500 hover:bg-red-100",
      },
   };

   const styles = alertStyles[type] || alertStyles.info;

   return (
      <div className={`p-4 rounded-md ${styles.container}`}>
         <div className="flex">
            <div className="flex-shrink-0">{styles.icon}</div>
            <div className="ml-3">
               {title && (
                  <h3 className={`text-sm font-medium ${styles.title}`}>
                     {title}
                  </h3>
               )}
               <div
                  className={`text-sm ${styles.message} ${
                     title ? "mt-2" : ""
                  }`}>
                  {message}
               </div>
            </div>
            {isDismissible && (
               <div className="ml-auto pl-3">
                  <button
                     onClick={() => setIsVisible(false)}
                     className={`inline-flex rounded-md p-1.5 ${styles.button}`}
                     aria-label="Dismiss">
                     <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                           fillRule="evenodd"
                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </button>
               </div>
            )}
         </div>
      </div>
   );
}

// Example usage
function AlertDemo() {
   return (
      <div className="space-y-4 p-4">
         {/* <Alert
            type="info"
            title="Information"
            message="This is an informational message for users."
         /> */}

         <Alert
            type="warning"
            title="Warning"
            message="Please proceed with caution."
         />

         <Alert
            type="success"
            title="Success"
            message="Operation completed successfully!"
         />

         <Alert
            type="error"
            title="Error"
            message="Something went wrong. Please try again."
         />

         <Alert
            type="info"
            message="This is an alert without a title."
            isDismissible={false}
         />
      </div>
   );
}
