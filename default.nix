with import <nixpkgs> { };
let
  name = "JWT";
  pythonEnv = python310.withPackages (ps: [
    ps.autopep8
    ps.flake8
    ps.django
    # ps.django_4
    ps.djangorestframework
    ps.django-cors-headers
    ps.djangorestframework-simplejwt
    ps.pyjwt

    # ps.django_extensions
    # ps.pylint-django
    # ps.django_colorful

    # ps.bpython
  ]);
in
mkShell {
  buildInputs = [
    pythonEnv

    black
  ];
}
