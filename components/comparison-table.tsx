import { CheckCircle, XCircle } from "lucide-react"

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-4 text-left">Features</th>
              <th className="p-4 text-center bg-blue-500/20">
                <span className="text-blue-400 font-bold">Enco Buds 3</span>
                <span className="block text-xs text-blue-300 mt-1">Latest Model</span>
              </th>
              <th className="p-4 text-center">Enco Buds 2</th>
              <th className="p-4 text-center">Enco Buds Air</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-4">Battery Life</td>
              <td className="p-4 text-center bg-blue-500/10">35 Hours</td>
              <td className="p-4 text-center">28 Hours</td>
              <td className="p-4 text-center">24 Hours</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-4">Latency</td>
              <td className="p-4 text-center bg-blue-500/10">47ms</td>
              <td className="p-4 text-center">80ms</td>
              <td className="p-4 text-center">94ms</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-4">Water Resistance</td>
              <td className="p-4 text-center bg-blue-500/10">IP54</td>
              <td className="p-4 text-center">IP54</td>
              <td className="p-4 text-center">IP52</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-4">AI Noise Cancellation</td>
              <td className="p-4 text-center bg-blue-500/10">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <XCircle className="h-5 w-5 text-red-500 mx-auto" />
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-4">Bluetooth Version</td>
              <td className="p-4 text-center bg-blue-500/10">5.3</td>
              <td className="p-4 text-center">5.2</td>
              <td className="p-4 text-center">5.0</td>
            </tr>
            <tr>
              <td className="p-4">Driver Size</td>
              <td className="p-4 text-center bg-blue-500/10">12.4mm</td>
              <td className="p-4 text-center">10mm</td>
              <td className="p-4 text-center">8mm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
