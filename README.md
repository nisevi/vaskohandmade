[![CircleCI](https://circleci.com/gh/nisevi/vaskohandmade.svg?style=svg)](https://circleci.com/gh/nisevi/vaskohandmade)

# VASKO

Handmade pedals and amps.

## Architecture

![](https://github.com/nisevi/vaskohandmade/blob/master/architecture.png)

[Here is how the process works](https://aws.amazon.com/blogs/security/how-to-protect-your-web-application-against-ddos-attacks-by-using-amazon-route-53-and-a-content-delivery-network/):

1. A user’s browser makes a DNS request to Route 53.
2. Route 53 has a hosted zone for the vaskohandmade.com domain.
3. The hosted zone serves the record:
     * a. If the request is for the apex zone, the alias resource record set for the CloudFront distribution is served.
     * b. If the request is for the www subdomain, the CNAME for the externally hosted CDN is served.
4. CloudFront forwards the request to Amazon S3.
5. S3 performs a secure redirect from www.vaskohandmade.com to vaskohandmade.com.
6. Amazon S3 objects are versioned and the lifecycle of previous versions is handled with a transition to Amazon Glacier 30 days after the object creation and finally removed after 60 days from becoming a previous version.