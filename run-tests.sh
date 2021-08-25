# assign variables
if [[ $SPEC = "all" ]];
  then SPEC="./cypress/specs/**/*.spec.js";
  else SPEC="./cypress/specs/**/$SPEC";
fi

# echo variables for debugging
echo $SPEC

# run tests in docker
docker run -v $PWD:/e2e -w /e2e cypress/included:8.3.0 \
 --browser chrome \
 --spec "$SPEC" \
 --env base_url="$BASE_URL" \
 || E2E_STATUS="ERROR" # try/catch the error

# save report in job's workspace
#mkdir -p ${WORKSPACE}/report/
#scp -r ${PWD}/cypress/{screenshots/,videos/} ${WORKSPACE}/report/

# exit with error if failed
if [[ "${E2E_STATUS}" == "ERROR" ]]
then
	echo "E2E tests - failed";
	exit 2;
fi
