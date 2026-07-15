using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;
public class ChartDataPoint {
    public string Month { get; set; }
    public int TargetSpend { get; set; }
    public int ActualSpend { get; set; }
}
