# cloudfront-lambda
Lambda@EDGE Functions

# add_custom_CF_viewer_response_headers

Adds the following headers to all associated CloudFront responses:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains;
X-Frame-Options: DENY
Cache-Control: no-store
Pragma: no-cache
```

## Deploying

1. Visit the [$LATEST code tab](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/add_custom_CF_viewer_response_headers/$LATEST?tab=code)
1. Paste the contents of `handler.js` into the **code** box
2. Pull down the **Actions** menu and select **Configure test event**
3. Paste in the [example response event](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-response) from the AWS documentation
4. Click Save and Test
5. Assuming you get "Execution result: succeeded" you can then pull down the **Actions** menu and choose "Publish new version"
6. Enter the next unused version number and click "Publish"
7. Select that version by going to the "Versions" tab in the **Version** menu
8. Go to the **Triggers** tab
9. Click **Add trigger**
10. Click the box and choose **CloudFront**
11. Select the distribution you would like to associate
12. In the **CloudFront Event** menu, choose "Viewer Response"
13. Check "Enable trigger and replicate"
14. Click Submit
