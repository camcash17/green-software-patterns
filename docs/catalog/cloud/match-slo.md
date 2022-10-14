---
version: 1.0
submitted_by: danielmeixner
published_date: TBD
category: cloud
tags: 
 - Cloud
 - Reliability/Availability
 - Monitoring
---

# Match your service level objectives to business needs

## Description

If service downtimes are acceptable it's better to not strive for highest availability but to design the solution according to real business needs. Lower availability guarantees can help reduce energy consumption by using less infrastructure components.

## Solution

Adjust your solution design to the service level your actual end users require.

## SCI Impact

`SCI = (E * I) + M per R`  

- `E`: We reduce the total electricity required by reducing the number of infrastructure components running.
- `M`: Depending on the solution used it might also reduce the number of physical infrastructure components used.

## Assumptions

Suppose you offer an service level objective (SLO) for availability for your serivce. Engineering teams target to fulfill this objective and will try to exceed this service level objective. In some cases engineering teams tend to strive for very sophisticated solutions to not run into any danger of falling below the SLO.
High availabilty comes often for the cost of additional resources used, in the case of hot stand-by desings even with full duplication of infrastructure where half of the infrastructur is not even used.
Ideally you validate the business reason for a specific SLO target and use it to design a solution that matches business requirements with a reasonable design for reliabilty & availability.

## Considerations
- This can impact the end user experience negativly because you are working towards a specifc SLO instead of highest availability.
- This can reduce overall cloud cost because you will use less resources.

## References
- [Uptime](https://en.wikipedia.org/wiki/Uptime)
- [Availability](https://en.wikipedia.org/wiki/Availability_(system))
- [Service Level Objective (SLO)](https://en.wikipedia.org/wiki/Service-level_objective)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency/)
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency/)