# Import modules to run in script
import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:361722089173:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.kevinhoman.info')
        build_bucket = s3.Bucket('portfoliobuild.kevinhoman.info')

        # Pull portfoliobuild.zip into memory for unzip and upload to S3
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        # Extract contents of zip package and upload into webroot S3 bucket
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                 ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "Job Done!"
        topic.publish(Subject="Portfolio Deploy", Message="Portfolio deployed succesfully")
    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message="The Portfolio was not sucessfully deployed")
        raise

    return 'Hello from Lambda'
